import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "./client";
import "./Details.css"


export default function PeopleDetails() {
	const { uid, cid } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState<any>({});

	const fetchUser = async () => {
		if (!uid) return;
		const user = await client.findUserById(uid);
		setUser(user);
	};

	useEffect(() => {
		if (uid) fetchUser();
	}, [uid]);

	if (!uid) return null;

	const closeDetails = () => {
		navigate(`/Kanbas/Courses/${cid}/People`, { replace: true });
	};

	return (
		<div className="wd-people-details position-fixed top-50 start-50 translate-middle bg-white p-4 shadow w-50">
			<button onClick={closeDetails} className="wd-people-details-close">
				<IoCloseSharp className="fs-1" />
			</button>
			<hr />
			<div className="text-danger fs-4 wd-name">
				{user.firstName} {user.lastName}
			</div>
			<b>Roles:</b> <span className="wd-roles">{user.role}</span> <br />
			<b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
			<b>Section:</b> <span className="wd-section">{user.section}</span> <br />
			<b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
		</div>
	);
}
