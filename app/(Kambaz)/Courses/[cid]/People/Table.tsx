"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../Database";
import PeopleDetails from "./Details";
import Link from "next/link";

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

export default function PeopleTable({ users = [], fetchUsers }: { users?: User[]; fetchUsers: () => void; }) {
 
  // const filteredUsers = users.filter((usr) =>
  //   enrollments.some(
  //     (enrollment) => enrollment.user === usr._id && enrollment.course === cid
  //   )
  // );

  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  return (
    <div id="wd-people-table" className="container mt-4">
      {showDetails && (
       <PeopleDetails
         uid={showUserId}
         onClose={() => {
           setShowDetails(false);
           fetchUsers();
         }}/>
     )}
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
          {users.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span className="text-decoration-none"
                 onClick={() => {
                   setShowDetails(true);
                   setShowUserId(user._id);
                 }} >
              
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name me-1">{user.firstName}</span>
                <span className="wd-last-name">{user.lastName}</span>
                </span>
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
