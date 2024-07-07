export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="React JS" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5001/Home"
            >
              CS5001 Intensive Foundations of Computer Science
            </a>
            <p className="wd-dashboard-course-title">
              Learn the basics of computer science
            </p>
            <a href="#/Kanbas/Courses/5001/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="Algorithms" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5800/Home"
            >
              C5800 Algorithms
            </a>
            <p className="wd-dashboard-course-title">
              Advanced algorithms and data structures
            </p>
            <a href="#/Kanbas/Courses/5800/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img
            src="/images/reactjs.jpg"
            width={200}
            alt="Mobile Application Development"
          />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5520/Home"
            >
              CS5520 Mobile Application Development
            </a>
            <p className="wd-dashboard-course-title">
              Developing mobile applications
            </p>
            <a href="#/Kanbas/Courses/5520/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img
            src="/images/reactjs.jpg"
            width={200}
            alt="Object Oriented Design"
          />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5004/Home"
            >
              CS5004 Object Oriented Design
            </a>
            <p className="wd-dashboard-course-title">
              Principles of OOP and design patterns
            </p>
            <a href="#/Kanbas/Courses/5004/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img
            src="/images/reactjs.jpg"
            width={200}
            alt="Discrete Structures"
          />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5002/Home"
            >
              CS5002 Discrete Structures
            </a>
            <p className="wd-dashboard-course-title">
              Mathematical structures in CS
            </p>
            <a href="#/Kanbas/Courses/5002/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img
            src="/images/reactjs.jpg"
            width={200}
            alt="Information Assurance"
          />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5010/Home"
            >
              CY5010 Information Assurance
            </a>
            <p className="wd-dashboard-course-title">
              Security principles and practices
            </p>
            <a href="#/Kanbas/Courses/5010/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img
            src="/images/reactjs.jpg"
            width={200}
            alt="Pattern Recognition & Computer Vision"
          />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5330/Home"
            >
              CS5330 Pattern Recognition & Computer Vision
            </a>
            <p className="wd-dashboard-course-title">
              Image processing and analysis
            </p>
            <a href="#/Kanbas/Courses/5330/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img
            src="/images/reactjs.jpg"
            width={200}
            alt="Database Management Systems"
          />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5200/Home"
            >
              CS5200 Database Management Systems
            </a>
            <p className="wd-dashboard-course-title">
              Database design and management
            </p>
            <a href="#/Kanbas/Courses/5200/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
