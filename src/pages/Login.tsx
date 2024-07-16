import { useState } from "react"
import DialogComponent from "../components/DialogComponent"
import LogInForm from "../components/LogInForm"

const LogIn = () => {
    const [open, setOpen] = useState(true)
    return <>
        <DialogComponent content={<LogInForm />} open={open} setOpen={setOpen} title={{ color: "blue", text: "Welcome" }} />
    </>
}
export default LogIn