// "use client";
// import { useState } from "react";
// import ModulesControls from "./ModulesControls";
// import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";

// export default function ModulesPage() {
//   const [week1Collapsed, setWeek1Collapsed] = useState(false);
//   const [week2Collapsed, setWeek2Collapsed] = useState(false);

//   return (
//     <div className="p-3">
//       <ModulesControls />
//       <br /><br /><br />

//       <ListGroup className="rounded-0" id="wd-modules">
//         {/* Week 1 */}
//         <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
//             <div className="d-flex align-items-center">
//               <BsGripVertical className="me-2 fs-3" />
//               Week 1
//             </div>
//             <div className="d-flex align-items-center gap-2">
//               <ModuleControlButtons />
//               <Button
//                 size="sm"
//                 variant="outline-secondary"
//                 onClick={() => setWeek1Collapsed(!week1Collapsed)}
//               >
//                 {week1Collapsed ? "Expand" : "Collapse"}
//               </Button>
//             </div>
//           </div>

//           {!week1Collapsed && (
//             <ListGroup className="wd-lessons rounded-0">
//               {[
//                 "LEARNING OBJECTIVES",
//                 "Introduction to the course",
//                 "Learn what is Web Development",
//               ].map((lesson, i) => (
//                 <ListGroupItem
//                   key={i}
//                   className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
//                 >
//                   <div className="d-flex align-items-center">
//                     <BsGripVertical className="me-2 fs-3" />
//                     {lesson}
//                   </div>
//                   <LessonControlButtons />
//                 </ListGroupItem>
//               ))}
//             </ListGroup>
//           )}
//         </ListGroupItem>

//         {/* Week 2 */}
//         <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
//             <div className="d-flex align-items-center">
//               <BsGripVertical className="me-2 fs-3" />
//               Week 2
//             </div>
//             <div className="d-flex align-items-center gap-2">
//               <ModuleControlButtons />
//               <Button
//                 size="sm"
//                 variant="outline-secondary"
//                 onClick={() => setWeek2Collapsed(!week2Collapsed)}
//               >
//                 {week2Collapsed ? "Expand" : "Collapse"}
//               </Button>
//             </div>
//           </div>

//           {!week2Collapsed && (
//             <ListGroup className="wd-lessons rounded-0">
//               {["LESSON 1", "LESSON 2"].map((lesson, i) => (
//                 <ListGroupItem
//                   key={i}
//                   className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
//                 >
//                   <div className="d-flex align-items-center">
//                     <BsGripVertical className="me-2 fs-3" />
//                     {lesson}
//                   </div>
//                   <LessonControlButtons />
//                 </ListGroupItem>
//               ))}
//             </ListGroup>
//           )}
//         </ListGroupItem>
//       </ListGroup>
//     </div>
//   );
// }

"use client";

import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import * as db from "../../../Database";
import { BsGripVertical } from "react-icons/bs";

// Optional control buttons components
function ModuleControlButtons() { return <span className="float-end">⚙️</span>; }
function LessonControlButtons() { return <span className="float-end">✏️</span>; }

export default function Modules() {
  const { cid } = useParams(); // course ID from URL
  const modules = db.modules.filter((m) => m.course === cid);

  return (
    <div id="wd-modules-screen">
      <h3>Modules</h3>
      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: any) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-4 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
            </div>

            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
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

