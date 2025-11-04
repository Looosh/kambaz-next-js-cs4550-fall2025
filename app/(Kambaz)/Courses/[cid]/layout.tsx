"use client";

import { ReactNode, useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

interface Course {
  _id: string;
  name: string;
  description?: string;
  [key: string]: unknown;
}

interface CoursesState {
  courses: Course[];
}

interface RootState {
  coursesReducer: CoursesState;
}

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);

  // Always call hooks first
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Validate courseId
  const courseId = !cid || Array.isArray(cid) ? null : cid;
  const course = courseId ? courses.find((c: Course) => c._id === courseId) : null;

  return (
    <div id="wd-courses">
      <h2 className="d-flex align-items-center">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          style={{ cursor: "pointer" }}
          onClick={() => setSidebarVisible(!sidebarVisible)}
        />
        {course?.name || "Course not found"}
      </h2>
      <hr />
      <div className="d-flex">
        {sidebarVisible && courseId && (
          <div>
            <CourseNavigation cid={courseId} />
          </div>
        )}
        <div className="flex-fill">
          {!courseId ? <div>Error: Invalid Course ID</div> : children}
        </div>
      </div>
    </div>
  );
}
