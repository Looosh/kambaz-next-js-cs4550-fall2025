"use client";
import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4">

          {/* Course 1 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 2 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/2550/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cybersecurity.jpg" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2550 CyberSecurity
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Intro to Cyber Security and Cryptography
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 3 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/4550/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/webdev.jpg" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS4550 Web Development
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Introduction to Web design and format using HTML, CSS, and Javascript
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 4 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/3800/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/theoryofcomp.jpg" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS3800 Theory of Computation
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Computing with Finite State Autonoma
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 5 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/2340/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/landforms.jpg" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    ENVR 2340 Landforms
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Earth's Landforms and Geomorphic Processes
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 6 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/2341/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/landforms.jpg" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    ENVR 2341 Lab for ENVR 2340
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Lab Studies for earth's landforms
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 7 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/9999/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/basiccompsci.jpg" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS9999 Introduction to CS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Basics of Computer Science
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
