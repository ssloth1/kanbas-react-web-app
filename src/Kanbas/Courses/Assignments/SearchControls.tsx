import { FaPlus, FaSearch } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

export default function SearchControls() {
  const navigate = useNavigate();
  const { cid } = useParams<{ cid: string }>();

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  return (
    <div id="wd-search-controls" className="d-flex justify-content-between align-items-center mb-3">
      <div className="input-group w-50 me-2">
        <span className="input-group-text bg-white border-end-0" id="basic-addon1">
          <FaSearch className="text-muted" />
        </span>
        <input
          id="wd-search-assignment"
          type="text"
          className="form-control border-start-0"
          placeholder="Search ..."
          style={{ border: '1px solid #ccc', fontWeight: 'lighter' }}
        />
      </div>
      <div className="d-flex ms-2">
        <button id="wd-add-assignment-group" className="btn btn-secondary me-2 d-flex align-items-center">
          <FaPlus className="me-2" />
          Group
        </button>
        <button id="wd-add-assignment" className="btn btn-danger d-flex align-items-center" onClick={handleAddAssignment}>
          <FaPlus className="me-2" />
          Assignment
        </button>
      </div>
    </div>
  );
}
