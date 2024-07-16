import axios from "axios";
import { Email } from "./types";

export const getAllEmail = async ({
    email,
}: {
    email: string
}) => {
    const res = await axios.get<Email[]>('http://localhost:3000/email/getAllEmails', {
        params: {
            email
        }
    })
    return res;
};
export const sendAnEmail = async ({
    userId, content, subject, toUsers, userName
}: {
    userId: string,
    toUsers: string[], content: string, subject: string, userName: string
}) => {
    const res = await axios.post('http://localhost:3000/email/sendAnEmail', {
        userId, content, subject, toUsers, userName
    })
    return res;
};
