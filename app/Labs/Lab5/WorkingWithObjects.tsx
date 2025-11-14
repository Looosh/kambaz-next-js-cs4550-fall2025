"use client";

import React, { useState } from "react";
import { FormCheck, FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;


export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });

    const [moduleObj, setModuleObj] = useState({
    id: "1111",
    name: "NodeJS Module",
    description: "Lab 5 Module",
    course: "CS4550",
    score: 100,
    completed: false,
  });

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title </a>

      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>



      <h4>Module</h4>

         <h4>Retrieving Module</h4>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>

      <h4>Retrieving Module Properties</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>

      <h4>Modifying Module Properties</h4>
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${moduleObj.name}`}>
        Update Module Name </a>

      <FormControl className="w-75" id="wd-module-name"
        defaultValue={moduleObj.name} onChange={(e) =>
          setModuleObj({ ...moduleObj, name: e.target.value })}/>

      <a id="wd-update-module-score"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/score/${moduleObj.score}`}>
        Update Module Score </a>

      <FormControl className="w-75" id="wd-module-score" 
        defaultValue={moduleObj.score} onChange={(e) =>
          setModuleObj({ ...moduleObj, score: parseInt(e.target.value) })}/>

          <FormCheck
            type="checkbox"
            label="Completed"
            checked={moduleObj.completed}
            onChange={(e) =>
                setModuleObj({ ...moduleObj, completed: e.target.checked })
            }
            />
            <a
            className="btn btn-primary mt-2"
            href={`${MODULE_API_URL}/completed/${moduleObj.completed}`}
            target="_blank"
            >
            Update Module Completed
            </a>


    </div>
);}
