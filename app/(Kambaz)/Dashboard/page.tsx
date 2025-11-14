"use client";

import * as client from "../Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { useEffect } from "react";

// Define types
export interface Course {
  _id: string;
  name: string;
  image?: string;
  number?: string;
  startDate?: string;
  endDate?: string;
  department?: string;
  credits?: number;
  description?: string;
  [key: string]: unknown;
}

type Enrollment = {
  user: string;
  course: string;
};

type User = {
  _id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};

// Redux slices
interface RootState {
  accountReducer: { currentUser: User | null };
  coursesReducer: { courses: Course[] };
}

// Dashboard Component
export default function Dashboard() {
  const currentUser = useSelector((state: RootState) => state.accountReducer.currentUser);
  const courses = useSelector((state: RootState) => state.coursesReducer.courses);
  const dispatch = useDispatch();

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

const onUpdateCourse = async (updatedCourse: Course) => {
  await client.updateCourse(updatedCourse);
  dispatch(
    setCourses(
      courses.map(c => (c._id === updatedCourse._id ? updatedCourse : c))
    )
  );
};


  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  
const onAddNewCourse = async () => {
  const newCourse: Course = { _id: "1111", name: "New Course" }; // minimal course object
  const createdCourse = await client.createCourse(newCourse);
  dispatch(setCourses([...courses, createdCourse]));
};


  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  


  if (!currentUser || !courses) return <div>This user has no courses, check user database...</div>;

  return (
    <div className="p-4" id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <button onClick={onAddNewCourse} className="btn btn-primary float-end" id="wd-add-new-course-click" >
                  Add
                </button>
      <hr />
      <Row xs={1} md={5} className="g-4">
        {courses.map((course) => (
          <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              {course.image && course.image.startsWith("/") ? (
                <Card.Img src={course.image} variant="top" />
              ) : (
                <div style={{ backgroundColor: course.image || "#ccc", height: 160, width: "100%" }} />
              )}
              <CardBody>
                <CardTitle>{course.name}</CardTitle>
                <CardText>{course.description}</CardText>
                <Button href={`/Courses/${course._id}/Home`} className="me-2">
                  Go
                </Button>
                <button className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  onDeleteCourse(course._id);
                    }} >
              Delete
            </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onUpdateCourse(course); // pass the actual course
                  }}
                  className="btn btn-secondary float-end"
                >
                  Update
                </button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
