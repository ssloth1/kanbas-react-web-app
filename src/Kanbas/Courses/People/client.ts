// kanbas-react-web-app/src/Kanbas/Courses/People/client.ts
import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const findAllUsers = async () => {
	const response = await axios.get(USERS_API);
	//console.log("People client: findAllUsers", response.data);
	return response.data;
};

export const findUsersByRole = async (role: string) => {
	const response = await
		axios.get(`${USERS_API}?role=${role}`);
	//console.log("People client: findUsersByRole", response.data);
	return response.data;
};

export const findUsersByPartialName = async (name: string) => {
	const response = await axios.get(`${USERS_API}?name=${name}`);
	//console.log("People client: findUsersByPartialName", response.data);
	return response.data;
};

export const findUserById = async (id: string) => {
	const response = await axios.get(`${USERS_API}/${id}`);
	console.log("People client: findUserById", response.data);
	return response.data;
};

export const deleteUser = async (userId: string) => {
	const response = await axios.delete(`${USERS_API}/${userId}`);
	return response.data;
};

export const updateUser = async (user: any) => {
	const response = await axios.put(`${USERS_API}/${user._id}`, user);
	console.log("People client: updateUser", response.data);
	return response.data;
};

export const createUser = async (user: any) => {
	const response = await axios.post(`${USERS_API}`, user);
	return response.data;
};


