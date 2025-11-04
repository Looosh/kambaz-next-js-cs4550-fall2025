"use client";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

interface Assignment {
  _id?: string;
  name: string;
  description: string;
  points: string;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
}

interface AssignmentsState {
  assignments: Assignment[];
}

interface RootState {
  assignmentsReducer: AssignmentsState;
}

export default function AssignmentEditor() {
  const { aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  const existing = assignments.find((a: Assignment) => a._id === aid);
  const [assignment, setAssignment] = useState<Assignment>(
    existing || {
      name: "",
      description: "",
      points: "",
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
    }
  );

  const handleSave = () => {
    if (aid === "new") dispatch(addAssignment(assignment));
    else dispatch(updateAssignment(assignment));
    router.push("/Courses/Assignments");
  };

  const handleCancel = () => router.push("/Courses/Assignments");

  return (
    <div className="p-4">
      <h2>{aid === "new" ? "New Assignment" : "Edit Assignment"}</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={assignment.name}
            onChange={(e) =>
              setAssignment({ ...assignment, name: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            value={assignment.dueDate}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Available From</Form.Label>
          <Form.Control
            type="date"
            value={assignment.availableFrom}
            onChange={(e) =>
              setAssignment({ ...assignment, availableFrom: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Available Until</Form.Label>
          <Form.Control
            type="date"
            value={assignment.availableUntil}
            onChange={(e) =>
              setAssignment({ ...assignment, availableUntil: e.target.value })
            }
          />
        </Form.Group>

        <div className="d-flex gap-2">
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}
