import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

export interface Course {
  _id: string;
  name: string;             
  description?: string;
  [key: string]: unknown;   
}

interface AddCoursePayload {
  name: string;
  description?: string;
  [key: string]: unknown;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, action: PayloadAction<AddCoursePayload>) => {
      const newCourse: Course = { ...action.payload, _id: uuidv4() };
      state.courses = [...state.courses, newCourse];
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload
      );
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      state.courses = state.courses.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );
    },
  },
});

export const { addNewCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
