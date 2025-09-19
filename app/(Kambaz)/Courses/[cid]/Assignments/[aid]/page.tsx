export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
  
        <textarea id="wd-description" rows={5} cols={50}>
  The assignment is available online Submit a link to the landing page of your Web application running on Netlify. 
  The landing page should include the following:
  - Your full name and section
  - Links to each of the lab assignments
  - Link to the Kanbas application
  - Links to all relevant source code repositories
  
  The Kanbas application should also include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
  
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group" defaultValue="ASSIGNMENTS">
                  <option>ASSIGNMENTS</option>
                  <option>QUIZZES</option>
                  <option>EXAMS</option>
                  <option>PROJECTS</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade">Display Grade As</label>
              </td>
              <td>
                <select id="wd-display-grade" defaultValue="Percentage">
                  <option>Percentage</option>
                  <option>Points</option>
                  <option>Letter Grade</option>
                  <option>Complete/Incomplete</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission" defaultValue="Online">
                  <option>Online</option>
                  <option>On Paper</option>
                  <option>No Submission</option>
                </select>
                <br />
                <b>Online Entry Options</b><br />
                <label><input type="checkbox" /> Text Entry</label><br />
                <label><input type="checkbox" /> Website URL</label><br />
                <label><input type="checkbox" /> Media Recordings</label><br />
                <label><input type="checkbox" /> Student Annotation</label><br />
                <label><input type="checkbox" /> File Uploads</label><br />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign">Assign To</label>
              </td>
              <td>
                <input id="wd-assign" defaultValue="Everyone" />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label>Available from</label>
              </td>
              <td>
                <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
                &nbsp; Until &nbsp;
                <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
              </td>
            </tr>
          </tbody>
        </table>
  
        <br />
        <button>Cancel</button>
        <button>Save</button>
      </div>
    );
  }
  