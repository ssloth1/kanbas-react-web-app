import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
	const [error, setError] = useState("");
	const [user, setUser] = useState<any>({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const signup = async () => {
		try {
			const currentUser = await client.signup(user);
			dispatch(setCurrentUser(currentUser));
			navigate("/Kanbas/Account/Profile");
		} catch (err: any) {
			setError(err.response.data.message);
		}
	};


	return (
		<div className="container d-flex justify-content-center align-items-center vh-100">
			<div className="col-12 col-md-6 col-lg-4">
				<h1 className="text-center mb-4">Sign up</h1>
				{error && <div className="alert alert-danger">{error}</div>}
				<input
					value={user.username}
					onChange={(e) => setUser({ ...user, username: e.target.value })}
					className="form-control mb-3"
					placeholder="Username"
				/>
				<input
					value={user.password}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					type="password"
					className="form-control mb-3"
					placeholder="Password"
				/>
				<button onClick={signup} className="btn btn-primary w-100 mb-3">
					Sign up
				</button>
				<div className="text-center">
					<Link to="/Kanbas/Account/Signin">
						Already have an account? Sign in
					</Link>
				</div>
			</div>
		</div>
	);
}