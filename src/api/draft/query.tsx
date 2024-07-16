import { useMutation, useQuery } from "react-query";
import { getAllDraft, sendADraft } from "./fetch";

export const useGetAllDraft = ({ userId }: { userId: string }) => {
    return useQuery(["userId", "user"], () => getAllDraft({ userId }));
};
export const useSendADraft = () => {
    return useMutation({
        mutationFn: ({
            content, subject, toUsers, userId, userName
        }: {
            userId: string,
            toUsers: string[], content: string, subject: string, userName: string
        }) => {
            return sendADraft({
                userId, content, subject, toUsers, userName
            });
        },
        mutationKey: ["email"],
    });
};
