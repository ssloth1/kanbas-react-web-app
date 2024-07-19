import React from 'react';
import { Navigate, Route, Routes, useParams, useLocation } from 'react-router';
import CoursesNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Grades from './Grades';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import { FaAlignJustify } from 'react-icons/fa';
import * as db from '../Database';

export default function Courses() {
  const { cid } = useParams();
  const course = db.courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  const section = pathname.split('/')[3] as keyof typeof sectionNames;

  const sectionNames = {
    Home: 'Home',
    Modules: 'Modules',
    Assignments: 'Assignments',
    Grades: 'Grades'
  };

  return (
    <div id="wd-courses">
      <div className="courses-header">
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name} {section && `> ${sectionNames[section]}`}
        </h2>
        <hr />
      </div>
      <div className="d-flex flex-column flex-md-row">
        <CoursesNavigation />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:cid" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
