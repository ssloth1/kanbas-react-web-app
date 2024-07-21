import { useParams } from 'react-router-dom';
import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import * as db from "../../Database";

export default function Modules() {
	const { cid } = useParams();
	const modules = db.modules.filter((module) => module.course === cid);

	return (
		<div id="wd-modules">
			<div className="wd-modules-controls-container">
				<ModulesControls />
			</div>
			<br />
			<ul id="wd-modules" className="list-group rounded-0">
				{modules.map((module) => (
					<li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
						<div className="wd-title p-3 ps-2 bg-secondary">
							<BsGripVertical className="me-2 fs-3" />
							{module.name}
							<ModuleControlButtons />
						</div>
						<ul className="wd-lessons list-group rounded-0">
							{module.lessons && module.lessons.map((lesson) => (
								<li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
									<BsGripVertical className="me-2 fs-3" />
									{lesson.name}
									<LessonControlButtons />
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
