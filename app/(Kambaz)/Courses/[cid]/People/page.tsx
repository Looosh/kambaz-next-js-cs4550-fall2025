"use client";
import React from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../Database";

type User = {
  _id: string;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  email?: string;
  dob?: string;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
};

type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db as { users: User[]; enrollments: Enrollment[] };

  const filteredUsers = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === cid
    )
  );

  return (
    <div id="wd-people-table" className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name me-1">{user.firstName}</span>
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
