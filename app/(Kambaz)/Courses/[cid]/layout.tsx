import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { courses } from "../../Database";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  const course = courses.find((c) => c._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">{course?.name}</h2>
      <Breadcrumb course={course} />
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation cid={cid} /> {/* Pass cid for dynamic links */}
            </td>
            <td valign="top" width="100%">
              {children} {/* Page content */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
