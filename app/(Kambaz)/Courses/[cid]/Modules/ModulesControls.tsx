"use client";
import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls({ onCollapseAll, allCollapsed }: { onCollapseAll?: () => void; allCollapsed?: boolean }) {
  return (
    <div id="wd-modules-controls" className="mb-4">
      <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center">
        {/* Collapse All Button */}
        <Button
          variant="secondary"
          id="wd-collapse-all"
          onClick={onCollapseAll} // if undefined, nothing happens
        >
          {allCollapsed ? "Expand All" : "Collapse All"}
        </Button>

        {/* View Progress Button */}
        <Button variant="secondary" id="wd-view-progress">
          View Progress
        </Button>

        {/* Publish Dropdown */}
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="wd-publish-all-btn">
            <GreenCheckmark /> Publish All
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item id="wd-publish-all">
              <GreenCheckmark /> Publish All
            </Dropdown.Item>
            <Dropdown.Item id="wd-publish-all-modules-and-items">
              <GreenCheckmark /> Publish all modules and items
            </Dropdown.Item>
            <Dropdown.Item id="wd-publish-modules-only">
              <GreenCheckmark /> Publish modules only
            </Dropdown.Item>
            <Dropdown.Item id="wd-unpublish-all-modules-and-items">
              🚫 Unpublish all modules and items
            </Dropdown.Item>
            <Dropdown.Item id="wd-unpublish-modules-only">
              🚫 Unpublish modules only
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Add Module Button */}
        <Button variant="danger" id="wd-add-module-btn">
          <FaPlus className="me-2" style={{ position: "relative", bottom: "1px" }} />
          Module
        </Button>
      </div>
    </div>
  );
}
