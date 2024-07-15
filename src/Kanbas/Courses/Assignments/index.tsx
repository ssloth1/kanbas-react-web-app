import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import SearchControls from "./SearchControls";
import AssignmentcontrolButtons from "./AssignmentControlButtons";
import { LuClipboardEdit } from "react-icons/lu";
import { Link } from 'react-router-dom';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <SearchControls /> <br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <div className="border border-dark rounded px-2">
                40% of Total
              </div>
              <button className="ms-3 p-0" style={{ background: 'none', border: 'none' }}>
                <FaPlus className="fs-5" style={{ color: 'black' }} />
              </button>
              <IoEllipsisVertical className="fs-3" />
            </div>
          </div>
          <ul className="wd-assignments list-group rounded-0">
            <li className="wd-assignment list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="fs-3" />
                <LuClipboardEdit className="me-2 fs-5" style={{ color: 'green' }} />
                <div className="ps-4">
                  <Link to="/courses/assignment-editor" className="text-decoration-none">
                    A1 - ENV + HTML
                  </Link>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am
                    <br />
                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentcontrolButtons/>
              </div>
            </li>
            <li className="wd-assignment list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="fs-3" />
                <LuClipboardEdit className="me-2 fs-5" style={{ color: 'green' }} />
                <div className="ps-4">
                  <Link to="/courses/assignment-editor" className="text-decoration-none">
                    A2 - CSS + BOOTSTRAP
                  </Link>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | Not available until May 13 at 12:00am
                    <br />
                    <strong>Due</strong> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentcontrolButtons />
              </div>
            </li>
            <li className="wd-assignment list-group-item p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="fs-3" />
                <LuClipboardEdit className="me-2 fs-5" style={{ color: 'green' }} />
                <div className="ps-4">
                  <Link to="/courses/assignment-editor" className="text-decoration-none">
                    A3 - JAVASCRIPT + REACT
                  </Link>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | Not available until May 20 at 12:00am
                    <br />
                    <strong>Due</strong> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentcontrolButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
