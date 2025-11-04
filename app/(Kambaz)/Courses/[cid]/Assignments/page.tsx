"use client";
import { useSelector, useDispatch } from "react-redux";
import { Button, ListGroup, Modal } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import { deleteAssignment } from "../Assignments/reducer";

// Define the shape of an assignment
interface Assignment {
  _id: string;
  name: string;
  description?: string;
  points?: string;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
}

// Redux slice state
interface AssignmentsState {
  assignments: Assignment[];
}

// Root Redux state
interface RootState {
  assignmentsReducer: AssignmentsState;
}

export default function Assignments() {
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );
  const [showConfirm, setShowConfirm] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setAssignmentToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (assignmentToDelete) dispatch(deleteAssignment(assignmentToDelete));
    setShowConfirm(false);
  };

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Assignments</h2>
        <Link href="Assignments/new">
          <Button variant="primary">+ Assignment</Button>
        </Link>
      </div>

      <ListGroup>
        {assignments.map((a: Assignment) => (
          <ListGroup.Item
            key={a._id}
            className="d-flex justify-content-between align-items-center"
          >
            <Link href={`Assignments/${a._id}`} className="text-decoration-none">
              {a.name}
            </Link>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => handleDelete(a._id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Confirmation Modal */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
