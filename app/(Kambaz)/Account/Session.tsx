import * as client from "./client";
import { useEffect, useState, ReactNode } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

interface SessionProps {
  children: ReactNode; 
}

export default function Session({ children }: SessionProps) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: unknown) { 
      console.error(err);
    }
    setPending(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!pending) {
    return <>{children}</>;
  }

  return <div>Loading...</div>;
}
