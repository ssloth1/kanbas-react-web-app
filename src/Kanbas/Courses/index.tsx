import { Navigate, Route, Routes, useParams, useLocation } from 'react-router';
import CoursesNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Grades from './Grades';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from './People/PeopleTable';
import PeopleDetails from './People/Details';

export default function Courses({ courses }: { courses: any[] }) {
	const { cid } = useParams();
	const course = courses.find((course) => course._id === cid);
	const { pathname } = useLocation();

	const sectionNames = {
		Home: 'Home',
		Modules: 'Modules',
		Piazza: 'Piazza',
		Zoom: 'Zoom',
		Assignments: 'Assignments',
		Quizzes: 'Quizzes',
		Grades: 'Grades',
		People: 'People'
	};

	const section = pathname.split('/')[4] as keyof typeof sectionNames;

	return (
		<div id="wd-courses">
			<div className="courses-header">
				<h2 className="text-danger">
					<FaAlignJustify className="me-4 fs-4 mb-1" />
					{course && course.name} {section && `> ${sectionNames[section]}`}
				</h2>
				<hr />
			</div>
			<div className="d-flex flex-column flex-md-row">
				<CoursesNavigation />
				<div className="flex-grow-1 p-3">
					<Routes>
						<Route path="/" element={<Navigate to="Home" />} />
						<Route path="Home" element={<Home />} />
						<Route path="Modules" element={<Modules />} />
						<Route
							path="Piazza"
							element={<a href="https://piazza.com" target="_blank" rel="noopener noreferrer">Go to Piazza</a>}
						/>
						<Route
							path="Zoom"
							element={<a href="https://zoom.us" target="_blank" rel="noopener noreferrer">Go to Zoom</a>}
						/>
						<Route path="Assignments" element={<Assignments />} />
						<Route path="Assignments/:aid" element={<AssignmentEditor />} />
						<Route path="Quizzes" element={<div>No Quizzes /:</div>} />
						<Route path="Grades" element={<Grades />} />
						<Route path="People" element={<PeopleTable />} />
						<Route path="People/:uid" element={<PeopleTable />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
