// kanbas-react-web-app/Kanbas/Courses/Assignments/index.tsx
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { BsGripVertical } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa6';
import { IoEllipsisVertical } from 'react-icons/io5';
import { format } from 'date-fns';
import SearchControls from './SearchControls';
import AssignmentControlButtons from './AssignmentControlButtons';
import { LuClipboardEdit } from 'react-icons/lu';
import { deleteAssignment, setAssignments } from './reducer';
import * as client from './client';

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

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = useSelector((state: { assignments: { assignments: Assignment[] } }) => state.assignments.assignments);
  const filteredAssignments = assignments.filter(assignment => assignment.course === cid);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssignments = async () => {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    };
    fetchAssignments();
  }, [cid, dispatch]);

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  const handleEditAssignment = (id: string) => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/${id}`);
  };

  const handleDeleteAssignment = async (id: string) => {
    if (window.confirm('Are you sure you want to remove the assignment?')) {
      await client.deleteAssignment(id);
      dispatch(deleteAssignment(id));
    }
  };

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'TBD';
    const date = new Date(dateString);
    return format(date, 'MMM d \'at\' h:mmaaa');
  };

  return (
    <div id="wd-assignments">
      <SearchControls />
      <br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <div className="border border-dark rounded px-2">40% of Total</div>
              <button className="ms-3 p-0" style={{ background: 'none', border: 'none' }} onClick={handleAddAssignment}>
                <FaPlus className="fs-5" style={{ color: 'black' }} />
              </button>
              <IoEllipsisVertical className="fs-3" />
            </div>
          </div>
          <ul className="wd-assignments list-group rounded-0">
            {filteredAssignments.map(assignment => (
              <li
                key={assignment._id}
                className="wd-assignment list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
              >
                <Link
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  className="d-flex align-items-center text-decoration-none text-dark flex-grow-1"
                >
                  <BsGripVertical className="fs-3" />
                  <LuClipboardEdit className="me-2 fs-5" style={{ color: 'green' }} />
                  <div className="ps-4">
                    {assignment.title}
                    <div className="text-muted">
                      <span className="text-danger">Multiple Modules</span> | <strong>Due</strong> {formatDate(assignment.dueDate)} |{' '}
                      {assignment.points !== undefined ? `${assignment.points} pts` : ' - pts'}
                    </div>
                  </div>
                </Link>
                <AssignmentControlButtons
                  assignmentId={assignment._id}
                  deleteAssignment={handleDeleteAssignment}
                  editAssignment={handleEditAssignment}
                />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
