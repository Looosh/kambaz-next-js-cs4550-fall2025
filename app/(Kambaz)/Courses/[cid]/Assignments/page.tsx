"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button, Form, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsPlus, BsSearch } from "react-icons/bs";
import { FaEllipsisV, FaRegEdit } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import * as db from "../../../Database";

export default function Assignments() {
  const [collapsed, setCollapsed] = useState(false);
  const { cid } = useParams(); // current course ID

  // Filter assignments for the current course
  const assignments = db.assignments.filter(a => a.course === cid);

  return (
    <div id="wd-assignments-screen" className="p-3">
      {/* Header Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="m-0">Assignments</h2>
        <div className="d-flex gap-2">
          <Button variant="success" className="d-flex align-items-center">
            <BsPlus className="me-1" /> Group
          </Button>
          <Button variant="success" className="d-flex align-items-center">
            <BsPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <InputGroup className="mb-3">
        <InputGroup.Text><BsSearch /></InputGroup.Text>
        <Form.Control placeholder="Search for Assignment" />
      </InputGroup>

      {/* Assignments Parent Row */}
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-module p-0 mb-3 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            Assignments
            <Button size="sm" variant="outline-secondary" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? "Expand" : "Collapse"}
            </Button>
          </div>

          {!collapsed && (
            <ListGroup className="wd-lessons rounded-0">
              {assignments.length > 0 ? (
                assignments.map((assignment) => (
                  <ListGroupItem
                    key={assignment._id}
                    className="p-3 mb-3 d-flex justify-content-between align-items-start wd-assignment border-left-green rounded"
                  >
                    <div className="d-flex align-items-start gap-2">
                      <FaRegEdit className="fs-5 text-secondary mt-1" />
                      <div>
                        <Link
                          href={`/Courses/${cid}/Assignments/Edit/${assignment._id}`}
                          className="fw-bold fs-5 text-decoration-none text-dark"
                        >
                          {assignment.title}
                        </Link>

                        <div className="text-muted small">
                          <div>Not available until {assignment.available}</div>
                          <div>Due: {assignment.due}, {assignment.points} pts</div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <GreenCheckmark />
                      <FaEllipsisV className="fs-5" />
                    </div>
                  </ListGroupItem>
                ))
              ) : (
                <div className="text-muted p-3">No assignments for this course.</div>
              )}
            </ListGroup>
          )}
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
