import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Editor.css";
import * as db from "../../Database";

type Assignment = {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
};

// Note to self/note to instructor:
// I made it so that instead of just having the default "everyone" option, you can also select individual students to assign the assignment to.
// However, it is locked into everyone by default, to select individual students, you must uncheck the "Everyone" option.
// Currently, due dates and available to and from dates don't render because the sample assignment data does not have those fields.
// I imagine that we will have to add those fields down the road when this component is integrated with mongoDB later in the class.

export default function AssignmentEditor() {

  // Get the course and assignment id from the URL, and find the assignment from the database 
  const { cid, aid } = useParams();
  const assignment: Assignment | undefined = db.assignments.find((assignment) => assignment._id === aid);
  const students = db.users.filter(user => user.role === "STUDENT");

  // State to keep track of who the assignment is assigned, and whether it is assigned to everyone
  const [assignTo, setAssignTo] = useState<string[]>([]);
  const [assignEveryone, setAssignEveryone] = useState<boolean>(true);

  // If the assignEveryone state is changed, clear the assignTo state, so that it is not assigned to anyone
  useEffect(() => {
    if (assignEveryone) {
      setAssignTo([]);
    }
  }, [assignEveryone]);

  // Function to handle when a student is selected or deselected
  const renderAssignChange = (id: string) => {
    if (assignTo.includes(id)) {
      setAssignTo(assignTo.filter(studentId => studentId !== id));
    } else {
      setAssignTo([...assignTo, id]);
    }
  };

  // Function to handle when the "Everyone" option is selected or deselected
  const handleEveryoneChange = () => {
    setAssignEveryone(!assignEveryone);
  };

  // Get the names of the students that the assignment is assigned to
  const selectedStudents = assignTo.map(id => {
    const student = students.find(student => student._id === id);
    return student ? `${student.firstName} ${student.lastName}` : "";
  });

  // If the assignment is not found, display a message saying so
  if (!assignment) {
    return (
      <div className="p-3">
        <h5>Assignment not found</h5>
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">Back to Assignments</Link>
        </div>
      </div>
    );
  }

  return (
    <div id="wd-assignments-editor" className="p-3">
      <h5>Assignment Name</h5>
      <input id="wd-name" defaultValue={assignment.title} className="form-control mb-3" />

      <textarea
        id="wd-description"
        className="form-control mb-3"
        defaultValue={
          "The assignment is available online. \nSubmit a link to the landing page of your web application running on Netlify. \nThe landing page should include the following:\n- Your full name and section\n- Links to each of the lab assignments\n- Links to the Kanbas application\n- Links to all relevant source code repositories.\n\nThe Kanbas application should include a link to navigate back to the landing page."
        }
      />

      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-10">
          <input id="wd-points" defaultValue={assignment.points ?? 100} className="form-control" />
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-assign" className="form-label">Assign</label>
        </div>
        <div className="col-md-10">
          <div className="border p-3">
            <div className="row mb-3 align-items-center">
              <div className="col-md-2">
                <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
              </div>
              <div className="col-md-10">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="assignDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    {assignEveryone ? "Everyone" : "Selected Students"}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="assignDropdown">
                    <li>
                      <label className="dropdown-item">
                        <input
                          type="checkbox"
                          id="assign-everyone"
                          className="me-2"
                          checked={assignEveryone}
                          onChange={handleEveryoneChange}
                        />
                        Everyone
                      </label>
                    </li>
                    {students.map(student => (
                      <li key={student._id}>
                        <label className={`dropdown-item ${assignEveryone ? "wd-disabled-label" : ""}`}>
                          <input
                            type="checkbox"
                            id={`assign-${student._id}`}
                            className={`me-2 ${assignEveryone ? "wd-disabled-checkbox" : ""}`}
                            checked={assignTo.includes(student._id)}
                            disabled={assignEveryone}
                            onChange={() => renderAssignChange(student._id)}
                          />
                          {student.firstName} {student.lastName}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                {!assignEveryone && (
                  <div className="mt-2">
                    {selectedStudents.map((student, index) => (
                      <span key={index} className="badge bg-light text-dark me-1">{student}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-md-2">
                <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
              </div>
              <div className="col-md-10">
                <input id="wd-due-date" type="datetime-local" className="form-control" defaultValue={assignment.dueDate || ""} />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-md-2">
                <label htmlFor="wd-available-from" className="form-label"><strong>Available From</strong></label>
              </div>
              <div className="col-md-5">
                <input id="wd-available-from" type="datetime-local" className="form-control" defaultValue={assignment.availableFrom || ""} />
              </div>
              <div className="col-md-1">
                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
              </div>
              <div className="col-md-4">
                <input id="wd-available-until" type="datetime-local" className="form-control" defaultValue={assignment.availableUntil || ""} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
      </div>

    </div>
  );
}