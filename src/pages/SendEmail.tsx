import { useState } from "react"
import ButtonSend_Close from "../components/ButtonsSend_close"
import DialogComponent from "../components/DialogComponent"
import EmailFrom from "./EmailForm"

interface SendEmailProps {
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
    refech: () => void
}

const SendEmail = (props: SendEmailProps) => {
    const [valueTo, setValueTo] = useState<string[]>([])
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const { setValue, value, refech } = props

    return <DialogComponent
        buttonsAction={<ButtonSend_Close
            refech={refech}
            setOpen={setValue}
            content={content}
            valueTo={valueTo}
            subject={subject}
            setValueTo={setValueTo}
            setSubject={setSubject}
            setContent={setContent}
        />}
        content={<EmailFrom content={content} setContent={setContent}
            setSubject={setSubject}
            setValueTo={setValueTo}
            subject={subject} valueTo={valueTo}
        />} open={value}
        setOpen={setValue}
        title={{
            color: "#fff",
            text: "send an email"
        }} />

}
export default SendEmail