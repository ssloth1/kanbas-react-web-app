export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <h2>Assignment Name</h2>
      <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-3" />
      <textarea id="wd-description" className="form-control mb-3">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-md-10">
          <input id="wd-points" value={100} className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-group">Assignment Group</label>
        </div>
        <div className="col-md-10">
          <select id="wd-group" className="form-control">
            <option value="ASSIGNMENT">ASSIGNMENT</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-display-grade-as">Display Grade as</label>
        </div>
        <div className="col-md-10">
          <select id="wd-display-grade-as" className="form-control">
            <option value="Percentage">Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </div>
        <div className="col-md-10">
          <select id="wd-submission-type" className="form-control">
            <option value="Online">Online</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <span>Online Entry Options</span>
        <div className="form-check">
          <input type="checkbox" id="wd-text-entry" className="form-check-input" />
          <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-website-url" className="form-check-input" />
          <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
          <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
          <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-file-upload" className="form-check-input" />
          <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-assign-to">Assign</label>
        </div>
        <div className="col-md-10">
          <input id="wd-assign-to" value="Everyone" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-due-date">Due</label>
        </div>
        <div className="col-md-10">
          <input id="wd-due-date" type="date" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-available-from">Available From</label>
        </div>
        <div className="col-md-10">
          <input id="wd-available-from" type="date" className="form-control" />
        </div>
        <div className="col-md-2">
          <label htmlFor="wd-available-until">Until</label>
        </div>
        <div className="col-md-10">
          <input id="wd-available-until" type="date" className="form-control" />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
  );
}