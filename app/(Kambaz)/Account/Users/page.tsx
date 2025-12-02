"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "../../Courses/[cid]/People/page";
import * as client from "../client";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

// Define User type
export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password?: string;
  role: "STUDENT" | "TA" | "FACULTY" | "ADMIN";
  section?: string;
  totalActivity?: number;
  loginId?: string;
  test?: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const { uid } = useParams();

  const fetchUsers = async () => {
    const allUsers: User[] = await client.findAllUsers();
    setUsers(allUsers);
  };

  const createUser = async () => {
    const newUser: User = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, newUser]);
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const filtered: User[] = await client.findUsersByPartialName(name);
      setUsers(filtered);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const filtered: User[] = await client.findUsersByRole(role);
      setUsers(filtered);
    } else {
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [uid]);

  return (
    <div>
      <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" /> Users
      </button>

      <h3>Users</h3>

      <FormControl
        onChange={(e) => filterUsersByName(e.target.value)}
        placeholder="Search people"
        className="float-start w-25 me-2 wd-filter-by-name"
      />

      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>

      <PeopleTable users={users as any} fetchUsers={fetchUsers} />
    </div>
  );
}
