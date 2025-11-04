"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";

interface User {
  _id: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  email?: string;
  role?: "USER" | "ADMIN" | "FACULTY" | "STUDENT";
}

interface Credentials {
  username: string;
  password: string;
}

export default function Signin() {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const signin = () => {
    const found = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (!found) return;

    const user: User = {
      ...found,
      role: ["USER", "ADMIN", "FACULTY", "STUDENT"].includes(found.role)
        ? (found.role as "USER" | "ADMIN" | "FACULTY" | "STUDENT")
        : undefined,
    };

    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
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
      <Link id="wd-signup-link" href="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
