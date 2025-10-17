"use client";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
/* Import other icons as needed, e.g., FaDownload, FaUpload, etc. */

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>

      {/* Publish / Unpublish buttons side by side */}
      <div className="d-flex mb-2">
        <div className="w-50 pe-1">
          <Button variant="secondary" size="lg" className="w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </Button>
        </div>
        <div className="w-50 ps-1">
          <Button variant="success" size="lg" className="w-100 text-nowrap">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </Button>
        </div>
      </div>

      {/* Import buttons full width */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </Button>

      {/* Additional buttons */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaCheckCircle className="me-2 fs-5" /> Mark All Complete
      </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <MdDoNotDisturbAlt className="me-2 fs-5" /> Mark All Incomplete
      </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Export Content
      </Button>

      {/* Add more buttons below following the same style */}
    </div>
  );
}
