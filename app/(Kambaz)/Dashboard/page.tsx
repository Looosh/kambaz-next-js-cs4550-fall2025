"use client";

import * as db from "../Database";
import { useSelector } from "react-redux";
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

// Define types
type Course = {
  _id: string;
  name: string;
  number?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
  description?: string;
};

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

  const enrollments: Enrollment[] = db.enrollments;

  if (!currentUser || !courses) return <div>This user has no courses, check user database...</div>;

  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id &&
        enrollment.course === course._id
    )
  );

  return (
    <div className="p-4" id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({enrolledCourses.length})</h2>
      <hr />
      <Row xs={1} md={5} className="g-4">
        {enrolledCourses.map((course) => (
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
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
