import { Box, Button, TextField } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import { VisibilityOff } from "@mui/icons-material";

interface PassWordButtonProps {
    value: string,
    setValue: (value: React.SetStateAction<string>) => void
    onchange?: () => void,
    title: string
}

const PassWordButton = (props: PassWordButtonProps) => {
    const { setValue, value, onchange, title } = props
    const [show, setShow] = useState(false)
    return <Box sx={{ alignItems: "center" }} width={"100%"}>
        <TextField label={title} fullWidth type={show ? "text" : "password"} InputProps={{
            endAdornment: (
                <Button onClick={() => setShow(prev => !prev)}>
                    {show ? <VisibilityIcon /> : <VisibilityOff />}
                </Button>

            )
        }} value={value} onChange={(e) => { onchange?.(); setValue(e.target.value) }} />
    </Box>
}
export default PassWordButton