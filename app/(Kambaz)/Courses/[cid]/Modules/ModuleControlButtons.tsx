"use client";
import { FaTrash, FaPlus } from "react-icons/fa";
import { BsCheck2 } from "react-icons/bs"; // green checkmark
import { IoEllipsisVertical } from "react-icons/io5"; // vertical three dots
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="d-flex align-items-center gap-2">
      {/* Edit and Delete buttons */}
      <FaPencil
        className="text-primary"
        style={{ cursor: "pointer" }}
        onClick={() => editModule(moduleId)}
      />
      <FaTrash
        className="text-danger"
        style={{ cursor: "pointer" }}
        onClick={() => deleteModule(moduleId)}
      />

      {/* Additional icons */}
      <BsCheck2 className="text-success" style={{ cursor: "pointer" }} />
      <FaPlus className="text-secondary" style={{ cursor: "pointer" }} />
      <IoEllipsisVertical className="text-secondary fs-5" style={{ cursor: "pointer" }} />
    </div>
  );
}
