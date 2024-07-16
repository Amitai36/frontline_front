import axios from "axios";

export const getAllEmail = async ({
    userId,
}: {
    userId: string
}) => {
    const res = await axios.get('http://localhost:3000/email/getAllEmails', {
        params: {
            userId
        }
    })
    return res;
};
export const sendAnEmail = async ({
    userId, content, subject, toUsers, userName
}: {
    userId: string,
    toUsers: string, content: string, subject: string, userName: string
}) => {
    const res = await axios.post('http://localhost:3000/email/sendAnEmail', {
        userId, content, subject, toUsers, userName
    })
    return res;
};
