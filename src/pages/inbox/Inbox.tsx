import { Grid, Typography } from "@mui/material"


import Side from "./Side"
import Header from "./Header"
import Content from "./Content"
import { useGetAllEmail } from "../../api/email/query"
import { useLocation } from "react-router-dom"

const Inbox = () => {
    const { state } = useLocation()
    const { data, isLoading, refetch } = useGetAllEmail({ email: state.email! })
    if (isLoading || !data?.data)
        return <Typography>loading...</Typography>
    return <>
        <Grid container height={"40%"}>
            <Grid xs={12} item>
                <Header refetch={refetch} />
            </Grid>
            <Grid xs={3} item>
                <Side data={data.data} />
            </Grid>
            <Grid xs={9} item>
                <Content />
            </Grid>
        </Grid>
    </>
}
export default Inbox