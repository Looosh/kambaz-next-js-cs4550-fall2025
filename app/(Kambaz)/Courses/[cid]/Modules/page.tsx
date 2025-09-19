"use client";
import { useState } from "react";

export default function Modules() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      {/* Collapse/Expand All button */}
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "Expand All" : "Collapse All"}
      </button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          )}
        </li>
        
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
);}

  