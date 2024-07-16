import { useState } from "react"
import { Button, Grid, TextField } from "@mui/material"

import PassWordButton from "./PassWordButton"
import { useSignUp } from "../api/login/query"
import { useNavigate } from "react-router-dom"

const SignUpForm = () => {
    const [repeatPassword, setRepeatPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()
    const signUp = useSignUp()

    const handleClick = () => {
        signUp.mutate({ email, firstName, lastName, password }, {
            onSuccess: (data) => {
                console.log("sign up", data.data)
                navigate(`/user/${data.data._id}`)
            }
        })
    }


    return <Grid container display={"flex"} rowSpacing={2} textAlign={"center"}>
        <Grid item xs={6}>
            <TextField type="email" value={firstName} fullWidth onChange={(e) => setFirstName(e.target.value)} label={"first name"} />
        </Grid>
        <Grid item xs={6}>
            <TextField value={lastName} fullWidth onChange={(e) => setLastName(e.target.value)} label={"last name"} />
        </Grid>
        <Grid item xs={12}>
            <TextField value={email} fullWidth onChange={(e) => setEmail(e.target.value)} label={"email"} />
        </Grid>
        <Grid item xs={12}>
            <PassWordButton title="password" setValue={setPassword} value={password} />
        </Grid>
        <Grid item xs={12}>
            <PassWordButton title="repeat password" setValue={setRepeatPassword} value={repeatPassword} />
        </Grid>
        <Button disabled={(!email || !password || !repeatPassword || !firstName || !lastName) || (repeatPassword !== password) || (!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email))} variant="contained" onClick={handleClick}>Sign Up</Button>
    </Grid>
}
export default SignUpForm