import { useMutation } from "react-query";
import { login } from "./fetch";

export const useLogin = () => {
    return useMutation({
        mutationFn: ({
            email,
            password,
        }: {
            email: string,
            password: string,
        }) => {
            return login({
                email,
                password,
            });
        },
        mutationKey: ["user"],
    });
};
