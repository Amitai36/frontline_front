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

export const SignUp = async ({
    firstName, lastName, password, email
}: {
    email: string, password: string, firstName: string, lastName: string
}) => {
    const res = await axios.post<User>('http://localhost:3000/users/signUp', { email, password, firstName, lastName })
    return res;
};
