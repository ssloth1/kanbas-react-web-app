import { CiFilter } from "react-icons/ci";
import { FaFileImport, FaFileExport, FaCog, FaChevronDown, FaSearch } from "react-icons/fa";
import './index.css';

export default function Grades() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-secondary text-black me-2">
          <FaFileImport className="me-2" />
          Import
        </button>
        <button className="btn btn-secondary text-black me-2">
          <FaFileExport className="me-2" />
          Export <FaChevronDown className="ms-2" />
        </button>
        <button className="btn btn-secondary text-black">
          <FaCog />
        </button>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="search-student-names" className="form-label"><strong>Student Names</strong></label>
          <div className="wd-select-wrapper">
            <FaSearch className="wd-select-icon-left" />
            <input type="text" id="search-student-names" className="form-control wd-select" placeholder="Search Students" />
            <FaChevronDown className="wd-select-icon-right" />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="search-assignment-names" className="form-label"><strong>Assignment Names</strong></label>
          <div className="wd-select-wrapper">
            <FaSearch className="wd-select-icon-left" />
            <input type="text" id="search-assignment-names" className="form-control wd-select" placeholder="Search Assignments" />
            <FaChevronDown className="wd-select-icon-right" />
          </div>
        </div>
      </div>

      <div className="d-flex mb-3">
        <button className="btn btn-secondary text-black">
          <CiFilter className="me-2" />
          Apply Filter
        </button>
      </div>


      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP</th>
              <th>A2 HTML</th>
              <th>A3 CSS</th>
              <th>A4 Bootstrap</th>
              <th>A5 Javascript</th>
              <th>Total Grade</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Jim Bebarski</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Ricky Bobby</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Hellen Keller</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Paul Atriedes</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>John Snow</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
