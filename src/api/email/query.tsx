import { useMutation, useQuery } from "react-query";
import { getAllEmail, sendAnEmail } from "./fetch";

export const useGetAllEmail = ({ email }: { email: string }) => {
    return useQuery(["email", "user"], () => getAllEmail({ email }));
};
export const useSendnEmail = () => {
    return useMutation({
        mutationFn: ({
            content, subject, toUsers, userId, userName
        }: {
            userId: string,
            toUsers: string[], content: string, subject: string, userName: string
        }) => {
            return sendAnEmail({
                userId, content, subject, toUsers, userName
            });
        },
        mutationKey: ["email"],
    });
};
