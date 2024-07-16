import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, ButtonGroup, Stack, TextField, Typography } from "@mui/material"

import { useLogin } from "../api/login/query"
import PassWordButton from "./PassWordButton"

const LogInForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const logIn = useLogin()
    const onClickLogIn = () => {
        logIn.mutate({ email, password }, {
            onSuccess: (data) => {
                navigate(`/user/${data.data._id}`)

            },
        })
    }
    const onClickSignUp = () => {
        navigate("/SignUp")
    }
    return <>
        <Stack onKeyDown={(e) => {
            if (e.code === "Enter" && email && password) {
                onClickLogIn()
            }
        }}>
            <Typography>Email</Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} />
            <Typography>password</Typography>
            <PassWordButton title="" value={password} setValue={setPassword} />
            <ButtonGroup>
                <Button disabled={(!email || !password)} onClick={onClickLogIn}>Login</Button>
                <Button onClick={onClickSignUp}>sign in</Button>
            </ButtonGroup>
        </Stack>
    </>
}
export default LogInForm