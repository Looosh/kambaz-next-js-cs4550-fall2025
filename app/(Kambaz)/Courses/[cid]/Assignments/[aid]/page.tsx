"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database"; // adjust path if needed

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  // Find the assignment in the database
  const assignment = db.assignments.find(a => a._id === aid);

  if (!assignment) return <div>Assignment not found</div>;

  return (
    <div id="wd-assignments-editor" className="p-3" style={{ maxWidth: "800px" }}>
      <h2>Edit Assignment</h2>

      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" defaultValue={assignment.title} /><br /><br />

      <label htmlFor="wd-description">Description</label><br />
      <textarea id="wd-description" rows={5} cols={50} defaultValue={assignment.description}></textarea><br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={assignment.points} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue={assignment.group}>
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECTS</option>
              </select>
            </td>
          </tr>

          {/* <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission">Submission Type</label>
            </td>
            <td>
              {assignment.submission.map((type, i) => (
                <label key={i} className="d-block">
                  <input type="checkbox" checked readOnly /> {type}
                </label>
              ))}
            </td>
          </tr> */}

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue={assignment.due} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label>Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" defaultValue={assignment.available} />
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <div className="d-flex gap-2">
        <Link href={`/Courses/${cid}/Assignments`}>
          <button className="btn btn-secondary">Cancel</button>
        </Link>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}
