import { useState } from "react"
import DialogComponent from "../components/DialogComponent"
import EmailFrom from "./EmailForm"

const SendEmail = () => {
    const [open, setOpen] = useState(true)
    return <>
        <DialogComponent content={<EmailFrom />} open={open} setOpen={setOpen} title={{ color: "#fff", text: "send an email" }} />
    </>
}
export default SendEmail