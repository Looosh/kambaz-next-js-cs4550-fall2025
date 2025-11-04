"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

interface AccountState {
  currentUser: { id: number; name: string } | null;
}

interface RootState {
  accountReducer: AccountState;
}

export default function AccountPage() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  if (!currentUser) {
    redirect("/Account/Signin");
  } else {
    redirect("/Account/Profile");
  }
}
