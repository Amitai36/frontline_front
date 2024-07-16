import { Avatar, Box, Grid, Typography } from "@mui/material"
import { Email } from "../../api/email/types"
import moment from "moment"


interface SideProps {
    data: Email[],
    setSelectData: React.Dispatch<React.SetStateAction<{
        from: string;
        date: string;
        subject: string;
        content: string;
    } | undefined>>
}

const Side = (props: SideProps) => {
    const { data, setSelectData } = props
    return <div >
        {data.map((row, key) => <Box key={key} sx={{ border: "5px solid black" }}>
            <Grid onClick={() => {
                setSelectData({
                    content: row.content,
                    date: moment(row.date).format("YYYY/MM/DD HH:mm"),
                    from: row.from,
                    subject: row.subject
                })
            }} sx={{ cursor: "pointer" }} container>
                <Grid xs={2} item>
                    <Avatar>
                        {row.from}
                    </Avatar>
                </Grid>
                <Grid xs={7} item container>
                    <Grid item xs={12}>
                        {row.from}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color={"blue"}>
                            {row.subject}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color={"gray"}>
                            {row.content.slice(0, 20)}...
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Typography color={"gray"}>
                        {moment(row.date).format("YYYY/MM/DD HH:mm")}
                    </Typography>

                </Grid>
            </Grid>
        </Box>)}
    </div>
}
export default Side