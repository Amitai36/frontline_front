import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, ButtonGroup, Stack, TextField, Typography } from "@mui/material"

import { useLogin } from "../api/login/query"

const LogInForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const logIn = useLogin()
    const onClickLogIn = () => {
        logIn.mutate({ email, password }, {
            onSuccess: (data) => {
                console.log(data.data.email)
                console.log(data.data.name)
                navigate(`/user/${data.data.name}`)

            },
        })
    }
    const onClickSignUp = () => {
        navigate("/SignUp")
    }
    return <>
        <Stack>
            <Typography>Email</Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} />
            <Typography>password</Typography>
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} />

            <ButtonGroup>
                <Button onClick={onClickLogIn}>Login</Button>
                <Button onClick={onClickSignUp}>sign in</Button>
            </ButtonGroup>
        </Stack>
    </>
}
export default LogInForm