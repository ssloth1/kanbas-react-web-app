import { NavLink, useParams } from "react-router-dom";
import "./index.css";

export default function CoursesNavigation() {
	const { cid } = useParams();

	const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

	const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
		isActive ? "list-group-item border border-0 active" : "list-group-item text-danger border border-0";

	return (
		<div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
			{links.map((link) => (
				<NavLink
					key={link}
					to={`/Kanbas/Courses/${cid}/${link}`}
					className={getNavLinkClass}
				>
					{link}
				</NavLink>
			))}
		</div>
	);
}