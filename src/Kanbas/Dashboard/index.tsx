import './index.css';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title" title="CS5610 Web Development">CS5610 Web Development</h5>
                  <p className="wd-dashboard-course-year" title="2024">Summer 2024</p>
                  <p className="card-text" title="Full Stack software developer">Developing web applications</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/5001/Home">
                <img src="/images/reactjs.jpg" className="card-img-top" alt="CS5001 Intensive Foundations of Computer Science" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title" title="CS5001 Intensive Foundations of Computer Science">CS5001 Intensive Foundations of Computer Science</h5>
                  <p className="wd-dashboard-course-year" title="2024">Summer 2024</p>
                  <p className="card-text" title="Learn the basics of computer science">Learn the basics of computer science</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/5800/Home">
                <img src="/images/reactjs.jpg" className="card-img-top" alt="Algorithms" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title" title="C5800 Algorithms">C5800 Algorithms</h5>
                  <p className="wd-dashboard-course-year" title="2024">Summer 2024</p>
                  <p className="card-text" title="Advanced algorithms and data structures">Advanced algorithms and data structures</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/5520/Home">
                <img src="/images/reactjs.jpg" className="card-img-top" alt="Mobile Application Development" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title" title="CS5520 Mobile Application Development">CS5520 Mobile Application Development</h5>
                  <p className="wd-dashboard-course-year" title="2024">Summer 2024</p>
                  <p className="card-text" title="Developing mobile applications">Developing mobile applications</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/5004/Home">
                <img src="/images/reactjs.jpg" className="card-img-top" alt="Object Oriented Design" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title" title="CS5004 Object Oriented Design">CS5004 Object Oriented Design</h5>
                  <p className="wd-dashboard-course-year" title="2024">Summer 2024</p>
                  <p className="card-text" title="Principles of OOP and design patterns">Principles of OOP and design patterns</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/5002/Home">
                <img src="/images/reactjs.jpg" className="card-img-top" alt="Discrete Structures" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title" title="CS5002 Discrete Structures">CS5002 Discrete Structures</h5>
                  <p className="wd-dashboard-course-year" title="2024">Summer 2024</p>
                  <p className="card-text" title="Mathematical structures in CS">Mathematical structures in CS</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/5010/Home">
                <img src="/images/reactjs.jpg" className="card-img-top" alt="Information Assurance" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title" title="CY5010 Information Assurance">CY5010 Information Assurance</h5>
                  <p className="wd-dashboard-course-year" title="2024">Summer 2024</p>
                  <p className="card-text" title="Security principles and practices">Security principles and practices</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/5330/Home">
                <img src="/images/reactjs.jpg" className="card-img-top" alt="Pattern Recognition & Computer Vision" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title" title="CS5330 Pattern Recognition & Computer Vision">CS5330 Pattern Recognition & Computer Vision</h5>
                  <p className="wd-dashboard-course-year" title="2024">Summer 2024</p>
                  <p className="card-text" title="Image processing and analysis">Image processing and analysis</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
