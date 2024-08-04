// kanbas-react-web-app/Kanbas/Courses/Assignments/Editor.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addAssignment, updateAssignment } from './reducer';
import './Editor.css';
import * as client from './client';

// Define the Assignment type
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

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector((state: { assignments: { assignments: Assignment[] } }) => state.assignments.assignments);

  const existingAssignment = assignments.find(a => a._id === aid);

  const [assignment, setAssignment] = useState<Assignment>({
    _id: existingAssignment?._id || '',
    title: existingAssignment?.title || '',
    course: existingAssignment?.course || cid!,
    description: existingAssignment?.description || '',
    points: existingAssignment?.points || 0,
    dueDate: existingAssignment?.dueDate || '',
    availableFrom: existingAssignment?.availableFrom || '',
    availableUntil: existingAssignment?.availableUntil || '',
  });

  useEffect(() => {
    if (aid && existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [aid, existingAssignment]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAssignment(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (aid && existingAssignment) {
      await client.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    } else {
      const newAssignment = { ...assignment, _id: Date.now().toString() };
      await client.createAssignment(cid as string, newAssignment);
      dispatch(addAssignment(newAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <h5>Assignment Name</h5>
      <input
        id="wd-name"
        name="title"
        value={assignment.title}
        onChange={handleChange}
        className="form-control mb-3"
      />

      <textarea
        id="wd-description"
        name="description"
        value={assignment.description}
        onChange={handleChange}
        className="form-control mb-3"
      />

      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-10">
          <input
            id="wd-points"
            name="points"
            type="number"
            value={assignment.points}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
        </div>
        <div className="col-md-10">
          <input
            id="wd-due-date"
            name="dueDate"
            type="datetime-local"
            value={assignment.dueDate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
        </div>
        <div className="col-md-5">
          <input
            id="wd-available-from"
            name="availableFrom"
            type="datetime-local"
            value={assignment.availableFrom}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-1">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
        </div>
        <div className="col-md-4">
          <input
            id="wd-available-until"
            name="availableUntil"
            type="datetime-local"
            value={assignment.availableUntil}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button onClick={handleCancel} className="btn btn-secondary me-2">Cancel</button>
        <button onClick={handleSave} className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
