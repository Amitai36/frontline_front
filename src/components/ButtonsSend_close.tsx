import { Send } from "@mui/icons-material"
import { Button } from "@mui/material"

const ButtonSend_Close = () => {
    return <>
        <div style={{ display: "flex" }}>
            <Button
                sx={{ left: "50%" }}
            >
                close
            </Button>
            <Button
                sx={{ right: "100%" }}
            >
                <Send />
                send
            </Button>
        </div>
    </>
}
export default ButtonSend_Close