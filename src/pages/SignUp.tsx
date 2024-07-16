import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { useState } from "react"

import DialogComponent from "../components/DialogComponent"
import SignUpForm from "../components/SignUpForm"

const SignUp = () => {
    const [open, setOpen] = useState(true)
    const navigate = useNavigate()
    return <DialogComponent
        content={<SignUpForm />}
        buttonsAction={<Button
            onClick={() => navigate("/logIn")}>
            go back</Button>}
        open={open}
        setOpen={setOpen}
        title={{ color: "blue", text: "Sign Up" }} />


}
export default SignUp