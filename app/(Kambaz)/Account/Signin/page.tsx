"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";

// Define the shape of a user
interface User {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  email?: string;
  role?: "USER" | "ADMIN" | "FACULTY" | "STUDENT";
}

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const signin = () => {
    const user = db.users.find(
      (u: User) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return; // Ignore invalid login
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="p-4">
      <h1>Sign in</h1>
      <FormControl
        placeholder="username"
        className="mb-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        id="wd-username"
      />
      <FormControl
        placeholder="password"
        type="password"
        className="mb-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        id="wd-password"
      />
      <Button onClick={signin} className="w-100 mb-2" id="wd-signin-btn">
        Sign in
      </Button>
      <Link href="/Kambaz/Account/Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
