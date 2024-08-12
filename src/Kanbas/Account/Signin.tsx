import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signin() {
	const [error, setError] = useState("");
	const [credentials, setCredentials] = useState<any>({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const signin = async () => {
		try {
			const currentUser = await client.signin(credentials);
			dispatch(setCurrentUser(currentUser));
			navigate("/Kanbas/Account/Profile");
		} catch (err: any) {
			setError(err.response.data.message);
		}
	};


	return (
		<div className="container d-flex justify-content-center align-items-center vh-100">
			<div className="col-12 col-md-6 col-lg-4">
				<h1 className="text-center mb-4">Sign in</h1>
				{error && <div className="alert alert-danger">{error}</div>}
				<input
					id="wd-username"
					onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
					value={credentials.username}
					className="form-control mb-3"
					placeholder="Username"
				/>
				<input
					id="wd-password"
					onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
					value={credentials.password}
					className="form-control mb-3"
					placeholder="Password"
					type="password"
				/>
				<button
					id="wd-signin-btn"
					onClick={signin}
					className="btn btn-primary w-100 mb-3"
				>
					Sign in
				</button>
				<div className="text-center">
					<Link id="wd-signup-link" to="/Kanbas/Account/Signup">
						Don't have an account? Sign up
					</Link>
				</div>
			</div>
		</div>
	);
}