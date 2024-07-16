import { Button, ButtonGroup, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useLogin } from "../api/login/query"

const LogInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const logIn = useLogin()
    const onClickLogIin = () => {
        logIn.mutate({ email, password })
    }
    return <>
        <Stack>
            <Typography>Email</Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} />
            <Typography>password</Typography>
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} />

            <ButtonGroup>
                <Button onClick={onClickLogIin}>Login</Button>
                <Button>sign in</Button>
            </ButtonGroup>
        </Stack>
    </>
}
export default LogInForm