import { useMutation } from "react-query";
import { login } from "./fetch";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

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
        onError: (err: AxiosError<{ message: string }>) => {
            toast.error(err.response?.data.message)
        },
        mutationKey: ["user"],
    });
};
