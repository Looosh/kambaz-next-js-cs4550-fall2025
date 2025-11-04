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
  const course = courses.find((course: Course) => course._id === cid);

  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div id="wd-courses">
      <h2 className="d-flex align-items-center">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          style={{ cursor: "pointer" }}
          onClick={() => setSidebarVisible(!sidebarVisible)}
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {/* Sidebar is hidden/shown based on state */}
        {sidebarVisible && (
          <div>
            <CourseNavigation cid={cid} />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
