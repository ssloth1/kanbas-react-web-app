import { useParams, Link } from 'react-router-dom';
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import SearchControls from "./SearchControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuClipboardEdit } from "react-icons/lu";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

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
            {assignments.map((assignment) => (
              <li key={assignment._id} className="wd-assignment list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="d-flex align-items-center text-decoration-none text-dark flex-grow-1">
                  <BsGripVertical className="fs-3" />
                  <LuClipboardEdit className="me-2 fs-5" style={{ color: 'green' }} />
                  <div className="ps-4">
                    {assignment.title}
                    <div className="text-muted">
                      <span className="text-danger">Multiple Modules</span> | <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                </Link>
                <AssignmentControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}