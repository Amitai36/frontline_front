import axios from "axios";
import { User } from "./types";

export const login = async ({
    email, password
}: {
    email: string, password: string
}) => {
    const res = await axios.post<User>('http://localhost:3000/users/logIn', { email, password })
    return res;
};
