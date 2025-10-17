"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div
      id="wd-profile-screen"
      className="p-4 d-flex flex-column align-items-center"
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h3 className="mb-4">Profile</h3>
      <Form className="w-100">
        <Form.Control
          defaultValue="alice"
          placeholder="Username"
          className="mb-3 border rounded p-2"
        />
        <Form.Control
          defaultValue="123"
          placeholder="Password"
          type="password"
          className="mb-3 border rounded p-2"
        />
        <Form.Control
          defaultValue="Alice"
          placeholder="First Name"
          className="mb-3 border rounded p-2"
        />
        <Form.Control
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="mb-3 border rounded p-2"
        />
        <Form.Control
          defaultValue="2000-01-01"
          type="date"
          className="mb-3 border rounded p-2"
        />
        <Form.Control
          defaultValue="alice@wonderland"
          type="email"
          placeholder="Email"
          className="mb-3 border rounded p-2"
        />
        <Form.Select defaultValue="FACULTY" className="mb-3 border rounded p-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>

        <Link href="/Account/Signin" className="w-100 text-decoration-none">
          <Button variant="danger" className="w-100">
            Sign Out
          </Button>
        </Link>
      </Form>
    </div>
  );
}
