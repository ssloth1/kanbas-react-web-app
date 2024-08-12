import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
	const [profile, setProfile] = useState<any>({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const fetchProfile = async () => {
		try {
			const account = await client.profile();
			setProfile(account);
		} catch (err: any) {
			navigate("/Kanbas/Account/Signin");
		}
	};

	const signout = async () => {
		await client.signout();
		dispatch(setCurrentUser(null));
		navigate("/Kanbas/Account/Signin");
	};

	useEffect(() => {
		fetchProfile();
	}, []);

	return (
		<div className="container d-flex justify-content-center align-items-center vh-100">
			<div className="col-12 col-md-8 col-lg-6">
				<h1 className="text-center mb-4">Profile</h1>
				{profile && (
					<div>
						<div className="mb-3">
							<label htmlFor="wd-username" className="form-label">Username</label>
							<input
								id="wd-username"
								className="form-control"
								value={profile.username}
								disabled
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="wd-password" className="form-label">Password</label>
							<input
								id="wd-password"
								className="form-control"
								value={profile.password}
								disabled
								type="password"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="wd-firstname" className="form-label">First Name</label>
							<input
								id="wd-firstname"
								className="form-control"
								value={profile.firstName}
								disabled
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="wd-lastname" className="form-label">Last Name</label>
							<input
								id="wd-lastname"
								className="form-control"
								value={profile.lastName}
								disabled
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="wd-dob" className="form-label">Date of Birth</label>
							<input
								id="wd-dob"
								className="form-control"
								value={profile.dob}
								disabled
								type="date"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="wd-email" className="form-label">Email</label>
							<input
								id="wd-email"
								className="form-control"
								value={profile.email}
								disabled
								type="email"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="wd-role" className="form-label">Role</label>
							<select
								id="wd-role"
								className="form-select"
								value={profile.role}
								disabled
							>
								<option value="USER">User</option>
								<option value="ADMIN">Admin</option>
								<option value="FACULTY">Faculty</option>
								<option value="STUDENT">Student</option>
							</select>
						</div>
						<button onClick={signout} className="btn btn-danger w-100 mt-3">
							Sign out
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
