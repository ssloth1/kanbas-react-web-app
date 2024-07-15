
import { FaChevronDown } from 'react-icons/fa';
import './Editor.css';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <h5>Assignment Name</h5>
      <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-3" />

      <textarea id="wd-description" className="form-control mb-3">
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories. The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>

      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-10">
          <input id="wd-points" value={100} className="form-control" />
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-10">
          <div className="wd-select-wrapper">
            <select id="wd-group" className="form-control wd-select">
              <option value="ASSIGNMENT">ASSIGNMENT</option>
            </select>
            <FaChevronDown className="wd-select-icon" />
          </div>
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-10">
          <div className="wd-select-wrapper">
            <select id="wd-display-grade-as" className="form-control wd-select">
              <option value="Percentage">Percentage</option>
            </select>
            <FaChevronDown className="wd-select-icon" />
          </div>
        </div>
      </div>

      <div className="row mb-3 align-items-center">
        <div className="col-md-2">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-10">
          <div className="border p-3">
            <div className="wd-select-wrapper mb-3">
              <select id="wd-submission-type" className="form-control wd-select">
                <option value="Online">Online</option>
              </select>
              <FaChevronDown className="wd-select-icon" />
            </div>

            <span><strong>Online Entry Options</strong></span>
            <div className="form-check mb-2 mt-2">
              <input type="checkbox" id="wd-text-entry" className="form-check-input" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check mb-2">
              <input type="checkbox" id="wd-website-url" className="form-check-input" />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check mb-2">
              <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check mb-2">
              <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check mb-2">
              <input type="checkbox" id="wd-file-upload" className="form-check-input" />
              <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
            </div>
          </div>
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
                <input id="wd-assign-to" value="Everyone" className="form-control mb-3" />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-md-2">
                <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
              </div>
              <div className="col-md-10">
                <input id="wd-due-date" type="date" className="form-control" />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-md-2">
                <label htmlFor="wd-available-from" className="form-label"><strong>Available From</strong></label>
              </div>
              <div className="col-md-5">
                <input id="wd-available-from" type="date" className="form-control" />
              </div>
              <div className="col-md-1">
                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
              </div>
              <div className="col-md-4">
                <input id="wd-available-until" type="date" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
