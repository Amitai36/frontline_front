import { Grid, TextField, Typography } from "@mui/material"

const EmailFrom = () => {
    return <>
        <Grid container>
            <Grid container item xs={12}>
                <Grid xs={2} item>
                    <Typography component={"span"} variant="button" bgcolor={"gray"}>
                        TO
                    </Typography>
                    <Grid item xs={11}>
                        <TextField />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}
export default EmailFrom