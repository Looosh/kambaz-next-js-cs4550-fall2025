"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { FaRegCircleUser, FaInbox } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaFlaskSolid } from "react-icons/lia";

export default function KambazNavigation() {
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed top-0 bottom-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
    >
      {/* Northeastern Logo */}
      <ListGroupItem
        as="a"
        href="https://www.northeastern.edu/"
        target="_blank"
        className="bg-black border-0 text-center py-2"
      >
        <img src="/images/neulogo.webp" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      {/* Account */}
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link href="/Account" className="text-decoration-none d-block text-white">
          <FaRegCircleUser className="fs-2 mb-1 text-white" />
          <div className="small">Account</div>
        </Link>
      </ListGroupItem>

      {/* Dashboard */}
      <ListGroupItem className="border-0 bg-white text-center py-2">
        <Link href="/Dashboard" className="text-decoration-none d-block text-danger">
          <AiOutlineDashboard className="fs-2 mb-1 text-danger" />
          <div className="small">Dashboard</div>
        </Link>
      </ListGroupItem>

      {/* Courses */}
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link href="/Courses" className="text-decoration-none d-block text-danger">
          <LiaBookSolid className="fs-2 mb-1 text-danger" />
          <div className="small">Courses</div>
        </Link>
      </ListGroupItem>

      {/* Calendar */}
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link href="/Calendar" className="text-decoration-none d-block text-danger">
          <IoCalendarOutline className="fs-2 mb-1 text-danger" />
          <div className="small">Calendar</div>
        </Link>
      </ListGroupItem>

      {/* Inbox */}
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link href="/Inbox" className="text-decoration-none d-block text-danger">
          <FaInbox className="fs-2 mb-1 text-danger" />
          <div className="small">Inbox</div>
        </Link>
      </ListGroupItem>

      {/* Labs */}
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link href="/Labs" className="text-decoration-none d-block text-danger">
          <LiaFlaskSolid className="fs-2 mb-1 text-danger" />
          <div className="small">Labs</div>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
