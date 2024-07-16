import axios from "axios";

export const login = async ({
    email, password
}: {
    email: string, password: string
}) => {
    const res = axios.post('http://localhost/3000/logIn', { email, password })
    return res;
};
