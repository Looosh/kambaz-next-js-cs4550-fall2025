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
   addNewCourse: (state, { payload: course }) => {
     const newCourse = { ...course, _id: uuidv4() };
     state.courses = [...state.courses, newCourse] as any;
   },
   deleteCourse: (state, { payload: courseId }) => {
     state.courses = state.courses.filter(
       (course: any) => course._id !== courseId
     );
   },
   updateCourse: (state, { payload: course }) => {
     state.courses = state.courses.map((c: any) =>
       c._id === course._id ? course : c
     ) as any;
   },
   setCourses: (state, { payload: courses }) => {
     state.courses = courses;
   },
 },
});

export const { addNewCourse, deleteCourse, updateCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
