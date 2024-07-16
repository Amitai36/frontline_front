import axios from "axios";
import { Draft } from "./types";

export const getAllDraft = async ({
    userId,
}: {
    userId: string
}) => {
    const res = await axios.get<Draft[]>('http://localhost:3000/draft/getAllDraft', {
        params: {
            userId
        }
    })
    return res;
};
export const sendADraft = async ({
    userId, content, subject, toUsers, userName
}: {
    userId: string,
    toUsers: string[], content: string, subject: string, userName: string
}) => {
    const res = await axios.post('http://localhost:3000/draft/sendADraft', {
        userId, content, subject, toUsers, userName
    })
    return res;
};
