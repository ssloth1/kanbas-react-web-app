import { useParams, Link } from 'react-router-dom';
import './Editor.css';
import * as db from '../../Database';

type Assignment = {
  _id: string;
  title: string;
  course: string;

  // NTS: the below fields are optional,
  // just because I'm not really using them yet,
  // and I don't want big bad compiler to complain
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment: Assignment | undefined = db.assignments.find((assignment) => assignment._id === aid);

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

      <textarea id="wd-description" className="form-control mb-3" defaultValue={assignment.description || ''} />

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
                <input id="wd-assign-to" defaultValue="Everyone" className="form-control mb-3" />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-md-2">
                <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
              </div>
              <div className="col-md-10">
                <input id="wd-due-date" type="datetime-local" className="form-control" defaultValue={assignment.dueDate || ''} />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-md-2">
                <label htmlFor="wd-available-from" className="form-label"><strong>Available From</strong></label>
              </div>
              <div className="col-md-5">
                <input id="wd-available-from" type="datetime-local" className="form-control" defaultValue={assignment.availableFrom || ''} />
              </div>
              <div className="col-md-1">
                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
              </div>
              <div className="col-md-4">
                <input id="wd-available-until" type="datetime-local" className="form-control" defaultValue={assignment.availableUntil || ''} />
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
