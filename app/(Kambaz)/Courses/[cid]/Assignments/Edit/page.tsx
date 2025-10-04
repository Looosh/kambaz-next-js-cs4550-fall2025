"use client";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function EditAssignment() {
  return (
    <div className="p-3" style={{ maxWidth: "800px" }}>
      <h2>Edit Assignment</h2>
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" placeholder="Enter assignment name" />
        </Form.Group>

        {/* Directions */}
        <Form.Group className="mb-3" controlId="assignmentDirections">
          <Form.Label>Directions</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter directions for the assignment" />
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" placeholder="Enter points" />
        </Form.Group>

        {/* Group Dropdown */}
        <Form.Group className="mb-3" controlId="assignmentGroup">
          <Form.Label>Group</Form.Label>
          <Form.Select>
            <option>None</option>
            <option>Group 1</option>
            <option>Group 2</option>
          </Form.Select>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group className="mb-3" controlId="submissionType">
          <Form.Label>Submission Type</Form.Label>
          <div className="d-flex gap-3">
            <Form.Check type="checkbox" label="Online" />
            <Form.Check type="checkbox" label="On Paper" />
            <Form.Check type="checkbox" label="Other" />
          </div>
        </Form.Group>

        {/* Save Button */}
        <Button variant="primary">Save Assignment</Button>
      </Form>
    </div>
  );
}
