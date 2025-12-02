"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";

interface AccountState {
  currentUser: { id: number; name: string } | null;
}

interface RootState {
  accountReducer: AccountState;
}

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();

  return (
    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link}>
          <NavLink as={Link} href={`/Account/${link}`} active={pathname.endsWith(link.toLowerCase())}>
        {link} </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}
