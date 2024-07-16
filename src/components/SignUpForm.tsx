import { Grid, TextField } from "@mui/material"
import { useState } from "react"

const SignUpForm = () => {
    const [firstNname, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    
    return <>
        <Grid container display={"flex"} rowSpacing={2} textAlign={"center"}>
            <Grid item xs={6}>
                <TextField value={firstNname} fullWidth onChange={(e) => setFirstName(e.target.value)} label={"first name"} />
            </Grid>
            <Grid item xs={6}>
                <TextField value={lastName} fullWidth onChange={(e) => setLastName(e.target.value)} label={"last name"} />
            </Grid>
            <Grid item xs={12}>
                <TextField value={email} fullWidth onChange={(e) => setEmail(e.target.value)} label={"email"} />
            </Grid>
            <Grid item xs={12}>
                <TextField value={password} fullWidth onChange={(e) => setPassword(e.target.value)} label={"passord"} />
            </Grid>
            <Grid item xs={12}>
                <TextField value={repeatPassword} fullWidth onChange={(e) => setRepeatPassword(e.target.value)} label={"repeat password"} />
            </Grid>
        </Grid>
    </>
}
export default SignUpForm