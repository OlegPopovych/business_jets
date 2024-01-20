import axios from "axios";
import { User } from '../../types/type';

const usersApi = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
})

export const usersUrlEndpoint = '/users';

export const getUsers = async () => {
	const response = await usersApi.get(usersUrlEndpoint);

	return response.data;
}

export const getUserById = async (url: string, userId?: string): Promise<User> => {
		const response = await usersApi.get(`${url}/${userId}`);
	
		return response.data;
}