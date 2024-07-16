import { useMutation } from "react-query";
import { login, SignUp } from "./fetch";
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
export const useSignUp = () => {
    return useMutation({
        mutationFn: ({
            email,
            password,
            firstName,
            lastName,
        }: {
            email: string,
            password: string,
            firstName: string,
            lastName: string
        }) => {
            return SignUp({
                email,
                password,
                firstName,
                lastName
            });
        },
        onError: (err: AxiosError<{ message: string }>) => {
            toast.error(err.response?.data.message)
        },
        mutationKey: ["user"],
    });
};
