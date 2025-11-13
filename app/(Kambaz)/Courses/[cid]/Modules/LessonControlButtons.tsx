"use client";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons() {
  return (
    <div className="d-flex align-items-center float-end gap-1">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
