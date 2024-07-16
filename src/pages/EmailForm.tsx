import { Grid, TextareaAutosize, TextField, Typography } from "@mui/material"
import { useState } from "react";

const EmailFrom = () => {
    const [valueTo, setValueTo] = useState('')
    const [valueCc, setValueCc] = useState('')
    const [subject, setSubject] = useState('')
    return <Grid container alignItems={"center"} width={"100%"}>
        <Grid container item xs={12}>
            <Grid xs={1} item>
                <Typography component={"span"} variant="button" bgcolor={"gray"}>
                    TO
                </Typography>
            </Grid>
            <Grid item xs={11}>
                <TextField value={valueTo} onChange={(e) => setValueTo(e.target.value)} />
            </Grid>
            <Grid item xs={1}>
                <Typography component={"span"} variant="button" bgcolor={"gray"}>
                    Cc
                </Typography>
            </Grid>
            <Grid item xs={11}>
                <TextField value={valueCc} onChange={(e) => setValueCc(e.target.value)} />
            </Grid>
        </Grid>
        <Grid marginLeft={6} container item xs={12}>
            <Grid item xs={12} marginTop={"10px"}>
                <TextField label="Enter subject " value={subject} onChange={(e) => setSubject(e.target.value)} />
            </Grid>
            <TextareaAutosize placeholder="content" minRows={10} style={{ width: "100%" }} />
        </Grid>
    </Grid>
}
export default EmailFrom