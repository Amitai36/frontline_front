import { Send } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useLocation, useParams } from "react-router-dom"
import { useSendnEmail } from "../api/email/query"

interface ButtonSend_CloseProps {
    valueTo: string[]
    subject: string
    content: string
    setValueTo: React.Dispatch<React.SetStateAction<string[]>>
    setSubject: React.Dispatch<React.SetStateAction<string>>
    setContent: React.Dispatch<React.SetStateAction<string>>
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    refech: () => void
}

const ButtonSend_Close = (props: ButtonSend_CloseProps) => {
    const sendnEmail = useSendnEmail()
    const { state: { name, lastName } } = useLocation()
    const { id } = useParams()
    const { refech, subject, valueTo, content, setOpen, setContent, setSubject, setValueTo } = props
    const handleSendEmail = () => {
        sendnEmail.mutate({
            content, subject, toUsers: valueTo,
            userId: id!, userName: name + lastName
        }, {
            onSuccess: () => {
                setContent('');
                setSubject('');
                setValueTo([])
                refech()
                setOpen(false)

            }
        })
    }
    return <>
        <div style={{ display: "flex" }}>
            <Button
                sx={{ left: "50%" }}
            >
                close
            </Button>
            <Button
                onClick={handleSendEmail}
                sx={{ right: "100%" }}
            >
                <Send />
                send
            </Button>
        </div>
    </>
}
export default ButtonSend_Close