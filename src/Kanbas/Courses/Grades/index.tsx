import { CiFilter } from "react-icons/ci";
import { FaFileImport, FaFileExport, FaCog, FaChevronDown, FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import './index.css';
import * as db from "../../Database";

export default function Grades() {
	const { cid } = useParams();

	// Get all students in the course, and their grades, and all assignments in the course
	// Then render a table with students in rows, assignments in columns, and grades in cells
	const studentsInCourse = db.enrollments.filter(enrollment => enrollment.course === cid)
		.map(enrollment => {
			const user = db.users.find(user => user._id === enrollment.user);
			return {
				...user,
				grades: db.grades.filter(grade => grade.student === enrollment.user)
			};
		});

	// Get all assignments in the course
	const assignmentsInCourse = db.assignments.filter(assignment => assignment.course === cid);

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
							{assignmentsInCourse.map(assignment => (
								<th key={assignment._id}>{assignment.title}</th>
							))}
							<th>Total Grade</th>
						</tr>
					</thead>
					<tbody>

						{/* For each student, display their name and grades*/}
						{studentsInCourse.map(student => (
							<tr key={student._id}>
								<td className="text-danger">{student.firstName} {student.lastName}</td>

								{/* For each assignment, find the grade for the student, or display a dash if no grade */}
								{assignmentsInCourse.map(assignment => {
									const grade = student.grades.find(g => g.assignment === assignment._id)?.grade || " - ";
									return <td key={assignment._id}>{grade}%</td>;
								})}

								{/* Calculate the total grade for the student by averaging all grades */}
								<td>{(student.grades.reduce((total, g) => total + parseFloat(g.grade), 0) / student.grades.length) || 0}%</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
