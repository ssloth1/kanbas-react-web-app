import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { addModule, editModule, updateModule, deleteModule } from "./reducer";

import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
	const { cid } = useParams();
	const [moduleName, setModuleName] = useState("");
	const { modules } = useSelector((state: any) => state.modulesReducer);
	const dispatch = useDispatch();

	// Interface for Lesson,
	// This is just a temporary solution, since im getting errors 
	// that the lesson has type any
	interface Lesson {
		_id: string;
		name: string;
	}

	return (
		<div className="wd-modules">
			<div className="mb-3">
				<ModulesControls
					moduleName={moduleName}
					setModuleName={setModuleName}
					addModule={() => {
						dispatch(addModule({ name: moduleName, course: cid }));
						setModuleName("");
					}}
				/>
			</div>
			<ul id="wd-modules" className="list-group rounded-0">
				{modules
					.filter((module: any) => module.course === cid)
					.map((module: any) => (
						<li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
							<div className="wd-title p-3 ps-2 bg-secondary">
								<BsGripVertical className="me-2 fs-3" />
								{!module.editing ? (
									module.name
								) : (
									<input
										className="form-control w-50 d-inline-block"
										onChange={(e) =>
											dispatch(
												updateModule({ ...module, name: e.target.value })
											)
										}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												dispatch(updateModule({ ...module, editing: false }));
											}
										}}
										value={module.name}
									/>
								)}
								<ModuleControlButtons
									moduleId={module._id}
									deleteModule={(moduleId) => {
										dispatch(deleteModule(moduleId));
									}}
									editModule={(moduleId) => dispatch(editModule(moduleId))}
								/>
							</div>
							<ul className="wd-lessons list-group rounded-0">
								{module.lessons &&
									module.lessons.map((lesson: Lesson) => (
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
