"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CourseNavigationProps {
  cid: string;
}

export default function CourseNavigation({ cid }: CourseNavigationProps) {
  const pathname = usePathname();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group">
      {links.map((link) => {
        const path = `/Courses/${cid}/${link}`;
        const isActive = pathname === path || pathname.endsWith(link);
        return (
          <Link
            key={link}
            href={path}
            className={`list-group-item ${isActive ? "active" : ""}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
