import { Avatar, Box, Grid, Paper, Typography } from "@mui/material"


interface ContentProps {
    selectData: {
        from?: string;
        date: string;
        subject: string;
        content: string;
        to?: string
    } | undefined
}

const Content = (props: ContentProps) => {
    const { selectData } = props
    if (!selectData) {
        return <Typography>choose an email to display</Typography>
    }
    return <div style={{ marginLeft: "5%" }} >
        <Grid container alignItems={"center"}>
            <Grid item xs={1}>
                <Avatar>{selectData?.from ? selectData?.from.slice(0, 2) : selectData.to?.slice(0, 2)!}</Avatar>

            </Grid>
            <Grid item xs={1}>
                <Typography>{selectData.from}</Typography>
            </Grid>
        </Grid>
        <Grid container alignItems={"center"}>
            <Grid item xs={8}>
                <Typography color={"blue"}>{selectData.subject}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography>{selectData.date}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ minHeight: "100%" }}>
                    <Typography>{selectData.content}</Typography>
                </Paper>
            </Grid>
        </Grid>
    </div>

}
export default Content