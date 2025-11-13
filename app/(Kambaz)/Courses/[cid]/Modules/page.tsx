"use client";

import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import * as db from "../../../Database";
import { BsGripVertical } from "react-icons/bs";

// Define types
interface Lesson {
  _id: string;
  name: string;
}

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons?: Lesson[];
}

// Optional control buttons components
function ModuleControlButtons() { return <span className="float-end">⚙️</span>; }
function LessonControlButtons() { return <span className="float-end">✏️</span>; }

export default function Modules() {
  const { cid } = useParams(); // course ID from URL

  // Cast modules from db to the correct type
  const modules: Module[] = db.modules.filter((m: Module) => m.course === cid);

  return (
    <div id="wd-modules-screen">
      <h3>Modules</h3>
      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: Module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-4 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
            </div>

            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: Lesson) => (
                  <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
