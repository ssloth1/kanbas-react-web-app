// src/Kanbas/index.tsx
import "./styles.css"
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import KanbasNavigation from './Navigation';
import Account from './Account';
import Courses from './Courses';
import ProtectedRoute from "./ProtectedRoute";
import * as client from "./Courses/client";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

export default function Kanbas() {

  // Set the initial courses state to the courses from the database
  const [courses, setCourses] = useState<any[]>([]);

  // Set the initial course state, just placeholders for now
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });

  // Fetch the courses from the database
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);


  // Add a new course to the courses
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
  };


  // Delete the course from the courses array
  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };


  // Update the course in the courses array
  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="Dashboard" element={<ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse} />
              </ProtectedRoute>} />

              <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />

              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}


