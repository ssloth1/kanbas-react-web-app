import React from 'react';
import { Link } from 'react-router-dom';
import * as db from '../Database';
import './index.css';

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {courses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: '300px' }}>
              <div className="card">
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                  <img src="/images/reactjs.jpg" className="card-img-top" alt={course.name} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title" title={course.name}>
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-year" title="2024">
                      Summer 2024
                    </p>
                    <p className="card-text" title={course.description} style={{ maxHeight: 53, overflow: 'hidden' }}>
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Note to Self:
 * This is what Prof. Annunziato has in his Dashboard.tsx file,
 * import { Link } from "react-router-dom";
import * as db from "../Database";
export default function Dashboard() {
const courses = db.courses;
return (
<div id="wd-dashboard">
<h1 id="wd-dashboard-title">Dashboard</h1> <hr />
<h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
<div id="wd-dashboard-courses" className="row">
<div className="row row-cols-1 row-cols-md-5 g-4">
{courses.map((course) => (
<div className="wd-dashboard-course col" style={{ width: "300px" }}>
<Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
<div className="card rounded-3 overflow-hidden">
<img src="/images/reactjs.jpg" height="{160}" />
<div className="card-body">
<span className="wd-dashboard-course-link"
style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
{course.name}
</span>
<p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
{course.description}
</p>
<Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
</div>
</div>
</Link>
</div>
))}
</div>
</div>
</div>
);
}

 */