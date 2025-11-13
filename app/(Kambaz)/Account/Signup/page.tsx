"use client";
import Link from "next/link";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="d-flex flex-column align-items-center p-5" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1 className="mb-4">Sign Up</h1>

      <Form className="w-100">
        <Form.Control
          id="wd-name"
          placeholder="Full Name"
          className="mb-3"
        />
        <Form.Control
          id="wd-password"
          type="password"
          placeholder="Password"
          className="mb-3"
        />

        <Link href="/Account/Profile" className="btn btn-primary w-100 mb-3">
          Sign Up
        </Link>

        <div className="text-center">
          <Link href="/Account/Signin" className="text-primary">
            Sign In
          </Link>
        </div>
      </Form>
    </div>
  );
}
