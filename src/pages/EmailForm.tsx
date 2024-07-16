import { Grid, TextareaAutosize, TextField, Typography } from "@mui/material"

import InputTags from "../components/TagsInput";

interface EmailFromProps {
    valueTo: string[]
    setValueTo: React.Dispatch<React.SetStateAction<string[]>>
    subject: string
    setSubject: React.Dispatch<React.SetStateAction<string>>
    content: string
    setContent: React.Dispatch<React.SetStateAction<string>>
}

const EmailFrom = (props: EmailFromProps) => {
    const { setSubject, setValueTo, subject, valueTo, setContent, content } = props

    return <Grid container alignItems={"center"} width={"100%"}>
        <Grid container item xs={12}>
            <Grid xs={1} item>
                <Typography component={"span"} variant="button" bgcolor={"gray"}>
                    TO
                </Typography>
            </Grid>
            <Grid item xs={11}>
                <InputTags setTags={setValueTo} tags={valueTo} />
            </Grid>
        </Grid>
        <Grid marginLeft={6} container item xs={12}>
            <Grid item xs={12} marginTop={"10px"}>
                <TextField label="Enter subject " value={subject} onChange={(e) => setSubject(e.target.value)} />
            </Grid>
            <TextareaAutosize value={content} onChange={(e) => setContent(e.target.value)} placeholder="content" minRows={10} style={{ width: "100%" }} />
        </Grid>
    </Grid>
}
export default EmailFrom