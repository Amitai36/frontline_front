import { useState } from "react"

import ButtonSend_Close from "../components/ButtonsSend_close"
import DialogComponent from "../components/DialogComponent"
import EmailFrom from "./EmailForm"

const SendEmail = () => {
    const [open, setOpen] = useState(true)
    return <>
        <DialogComponent buttonsAction={<ButtonSend_Close />} content={<EmailFrom />} open={open} setOpen={setOpen} title={{ color: "#fff", text: "send an email" }} />
    </>
}
export default SendEmail