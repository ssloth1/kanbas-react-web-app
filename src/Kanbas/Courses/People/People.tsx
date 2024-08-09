import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as client from "./client";
import { FaUserFriends } from "react-icons/fa";
import { format } from "date-fns";

export default function PeopleTable() {
	const { cid } = useParams();
	const [users, setUsers] = useState<any[]>([]);
	const [role, setRole] = useState("");
	const [name, setName] = useState("");

	const filterUsersByName = async (name: string) => {
		setName(name);
		if (name) {
			try {
				const users = await client.findUsersByPartialName(name);
				setUsers(users);
			} catch (error) {
				console.error("Error fetching users by name:", error);
			}
		} else {
			fetchUsers();
		}
	};

	const fetchUsers = async () => {
		try {
			const users = await client.findAllUsers();
			setUsers(users);
		} catch (error) {
			console.error("Error fetching all users:", error);
		}
	};

	const filterUsersByRole = async (role: string) => {
		setRole(role);
		if (role) {
			try {
				const users = await client.findUsersByRole(role);
				setUsers(users);
			} catch (error) {
				console.error("Error fetching users by role:", error);
			}
		} else {
			fetchUsers();
		}
	};

	const formatDate = (date: string) => {
		if (!date) return "-";
		try {
			return format(new Date(date), "PPP p");
		} catch (error) {
			console.error("Error formatting date:", error);
			return date;
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div id="wd-people-table">
			<input
				onChange={(e) => filterUsersByName(e.target.value)}
				placeholder="Search people"
				className="form-control float-start w-25 me-2 wd-filter-by-name"
			/>
			<select
				value={role}
				onChange={(e) => filterUsersByRole(e.target.value)}
				className="form-select float-start w-25 wd-select-role"
			>
				<option value="">All Roles</option>
				<option value="STUDENT">Students</option>
				<option value="TA">Assistants</option>
				<option value="FACULTY">Faculty</option>
			</select>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>Login ID</th>
						<th>Section</th>
						<th>Role</th>
						<th>Last Activity</th>
						<th>Total Activity</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user: any, index) => (
						<tr key={user._id || index}>
							<td className="wd-full-name text-nowrap">
								<FaUserFriends
									className="wd-user-icon me-3 mb-1"
									style={{ fontSize: "1.5em", color: "grey" }}
								/>
								<Link
									to={`/Kanbas/Courses/${cid}/People/${user._id}`}
									className="wd-user-link"
								>
									<span className="wd-first-name">{user.firstName}</span>
									<span className="wd-space"> </span>
									<span className="wd-last-name">{user.lastName}</span>
								</Link>
							</td>
							<td className="wd-login-id">{user.loginId}</td>
							<td className="wd-section">{user.section}</td>
							<td className="wd-role">{user.role}</td>
							<td className="wd-last-activity">{formatDate(user.lastActivity)}</td>
							<td className="wd-total-activity">{user.totalActivity}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
