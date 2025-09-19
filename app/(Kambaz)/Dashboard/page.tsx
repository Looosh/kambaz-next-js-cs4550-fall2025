import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1111" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1111 React JS </h5>
              <p className="wd-dashboard-course-title">
                Web Developement
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2222" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS2222 React JS </h5>
              <p className="wd-dashboard-course-title">
                OOD
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3333" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS3333 React JS </h5>
              <p className="wd-dashboard-course-title">
                Theory of Computation
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4444" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS4444 React JS </h5>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1122" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1122 React JS </h5>
              <p className="wd-dashboard-course-title">
                Landforms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2233" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS2233 React JS </h5>
              <p className="wd-dashboard-course-title">
                Calculus
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
