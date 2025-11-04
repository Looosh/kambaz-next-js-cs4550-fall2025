"use client";

import * as db from "../Database";
import { useSelector } from "react-redux";
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

// Define types for clarity
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

// Dashboard Component
export default function Dashboard() {
  // Get currentUser safely
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser) as User | null;

  // Get courses safely
  const courses = useSelector((state: any) => state.coursesReducer.courses) as Course[] | undefined;

  // Get enrollments from database
  const enrollments: Enrollment[] = db.enrollments;

  // Show loading if currentUser or courses are not ready
  if (!currentUser || !courses) return <div>This user has no courses, check user database...</div>;

  // Filter courses that currentUser is enrolled in
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
        {enrolledCourses.map((course: Course) => (
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
