"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import * as db from "../../../../Database";

export default function EditAssignment() {
  const { cid, aid } = useParams(); // courseId and assignmentId from URL
  const router = useRouter();

  // Find the assignment based on assignmentId
  const assignment = db.assignments.find((a) => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found.</div>;
  }

  return (
    <div className="p-3" style={{ maxWidth: "800px" }}>
      <h2>Edit Assignment: {assignment.title}</h2>
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        {/* Directions / Description */}
        <Form.Group className="mb-3" controlId="assignmentDescription">
          <Form.Label>Directions</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            defaultValue={assignment.description || ""}
          />
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={assignment.points || 100} />
        </Form.Group>

        {/* Available Date */}
        <Form.Group className="mb-3" controlId="assignmentAvailable">
          <Form.Label>Available Date</Form.Label>
          <Form.Control type="date" defaultValue={assignment.available || ""} />
        </Form.Group>

        {/* Due Date */}
        <Form.Group className="mb-3" controlId="assignmentDue">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" defaultValue={assignment.due || ""} />
        </Form.Group>

        {/* Group Dropdown */}
        <Form.Group className="mb-3" controlId="assignmentGroup">
          <Form.Label>Group</Form.Label>
          <Form.Select defaultValue={assignment.group || "None"}>
            <option>None</option>
            <option>Group 1</option>
            <option>Group 2</option>
          </Form.Select>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group className="mb-3" controlId="submissionType">
          <Form.Label>Submission Type</Form.Label>
          <div className="d-flex gap-3">
            <Form.Check
              type="checkbox"
              label="Online"
              defaultChecked={assignment.submission?.includes("Online")}
            />
            <Form.Check
              type="checkbox"
              label="On Paper"
              defaultChecked={assignment.submission?.includes("On Paper")}
            />
            <Form.Check
              type="checkbox"
              label="Other"
              defaultChecked={assignment.submission?.includes("Other")}
            />
          </div>
        </Form.Group>

        {/* Action Buttons */}
        <div className="d-flex gap-3">
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">
            Cancel
          </Link>
          <Button
            variant="primary"
            onClick={() => {
              // Here you can add save logic (API call / state update)
              router.push(`/Courses/${cid}/Assignments`);
            }}
          >
            Save Assignment
          </Button>
        </div>
      </Form>
    </div>
  );
}
