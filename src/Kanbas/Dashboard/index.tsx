import { Link } from "react-router-dom";
import * as db from "../Database";
// import "./index.css"
// nts: keep the above line commented out for now.
// honestly probably dont need it, but just in case, keep it commented out.

export default function Dashboard() {
	const courses = db.courses;
	return (
		<div id="wd-dashboard" className="container">
			<h1 id="wd-dashboard-title">Dashboard</h1>
			<hr />
			<h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
			<hr />
			<div id="wd-dashboard-courses-wrapper" className="d-flex justify-content-center">
				<div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4 justify-content-start">
					{courses.map((course) => (
						<div className="wd-dashboard-course col" key={course._id} style={{ width: "300px" }}>
							<Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
								<div className="card rounded-3 overflow-hidden">
									<img src="/images/reactjs.jpg" height="160" alt={course.name} />
									<div className="card-body">
										<span className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
											{course.name}
										</span>
										<p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
											{course.description}
										</p>
										<Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}