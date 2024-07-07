export default function Modules() {
    return (
      <div>
        <div className="wd-toolbar">
          <button className="wd-button">Collapse All</button>
          <button className="wd-button">View Progress</button>
          <select className="wd-dropdown">
            <option value="publish-all">Publish All</option>
          </select>
          <button className="wd-button">+ Module</button>
        </div>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introductions, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                  <li className="wd-content-item">Creating a development environment</li>
                  <li className="wd-content-item">Creating a Web Application</li>
                  <li className="wd-content-item">Getting started with the 1st Assignment</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                  <li className="wd-content-item">Commit your source to GitHub.com</li>
                  <li className="wd-content-item">Deploying to Netlify</li>
                  <li className="wd-content-item">Deploying multiple branches in Netlify</li>
                  <li className="wd-content-item">A1 - HTML</li>
                </ul>
                <span className="wd-title">EVALUATIONS</span>
                <ul className="wd-content">
                  <li className="wd-content-item">A1 - Jul 8</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create User Interfaces with HTML</li>
                  <li className="wd-content-item">Keep working on assignment 1</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                  <li className="wd-content-item">Creating Web Forms</li>
                  <li className="wd-content-item">Navigating with Anchors</li>
                  <li className="wd-content-item">Single Page Navigation</li>
                  <li className="wd-content-item">Embedding content with lframes</li>
                  <li className="wd-content-item">Drawing with Scalable Vector Graphics</li>
                </ul>
                <span className="wd-title">EVALUATIONS</span>
                <ul className="wd-content">
                  <li className="wd-content-item">A1 - Jul 8</li>
                  <li className="wd-content-item">P - Aug 18</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );
}
  