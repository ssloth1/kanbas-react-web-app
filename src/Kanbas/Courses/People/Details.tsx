import { useEffect, useState } from "react";
import { FaUserCircle, FaPencilAlt } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "./client";

export default function PeopleDetails() {
	const { uid, cid } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState<any>({});
	const [isEditing, setIsEditing] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const fetchUser = async () => {
		if (!uid) return;
		const user = await client.findUserById(uid);
		setUser(user);
		setFirstName(user.firstName);
		setLastName(user.lastName);
	};

	const deleteUser = async (uid: string) => {
		await client.deleteUser(uid);
		navigate(`/Kanbas/Courses/${cid}/People`, { replace: true });
	};

	const updateUserDetails = async () => {
		const updatedUser = {
			...user,
			firstName: firstName,
			lastName: lastName,
		};
		const response = await client.updateUser(updatedUser);
		if (response) {
			setUser(updatedUser);
			setIsEditing(false);
			navigate(`/Kanbas/Courses/${cid}/People`, { replace: true });
		}
	};

	useEffect(() => {
		if (uid) fetchUser();
	}, [uid]);

	if (!uid) return null;

	const closeDetails = () => {
		navigate(`/Kanbas/Courses/${cid}/People`, { replace: true });
	};

	return (
		<div className="position-fixed top-50 start-50 translate-middle bg-light p-4 shadow rounded border border-secondary" style={{ maxWidth: '300px', width: '100%' }}>
			<button onClick={closeDetails} className="btn-close position-absolute top-0 end-0 m-2"></button>
			<hr />

			<div className="d-flex justify-content-center mb-3">
				<FaUserCircle className="fs-2 me-3" />
				<div>
					{isEditing ? (
						<div>
							<input
								type="text"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								className="form-control mb-2"
								placeholder="First Name"
							/>
							<input
								type="text"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								className="form-control mb-2"
								placeholder="Last Name"
							/>
						</div>
					) : (
						<h4 className="mb-1 text-danger">
							{user.firstName} {user.lastName}
							<FaPencilAlt
								className="ms-4 mb-1 text-danger"
								style={{ cursor: 'pointer' }}
								onClick={() => setIsEditing(true)}
							/>
						</h4>
					)}
					<p className="mb-1"><strong>Roles:</strong> <span>{user.role}</span></p>
					<p className="mb-1"><strong>Login ID:</strong> <span>{user.loginId}</span></p>
					<p className="mb-1"><strong>Section:</strong> <span>{user.section}</span></p>
					<p className="mb-0"><strong>Total Activity:</strong> <span>{user.totalActivity}</span></p>
				</div>
			</div>
			<hr />
			<div className="d-flex justify-content-center">
				<button onClick={() => deleteUser(uid)} className="btn btn-danger me-2 wd-delete">Delete</button>
				{isEditing ? (
					<button onClick={updateUserDetails} className="btn btn-primary wd-save">Save</button>
				) : (
					<button onClick={closeDetails} className="btn btn-secondary wd-cancel">Cancel</button>
				)}
			</div>
		</div>
	);
}
