import { useState } from "react"
import DialogComponent from "../components/DialogComponent"
import SignUpForm from "../components/SignUpForm"

const SignUp = () => {
    const [open, setOpen] = useState(true)
    return <>
        <DialogComponent content={<SignUpForm />} open={open} setOpen={setOpen} title={{ color: "blue", text: "Sign Up" }} />
    </>
}
export default SignUp