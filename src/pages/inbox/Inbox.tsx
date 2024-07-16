import { Grid } from "@mui/material"


import Side from "./Side"
import Header from "./Header"
import Content from "./Content"

const Inbox = () => {

    return <>
        <Grid container height={"40%"}>
            <Grid xs={12} item>
                <Header />
            </Grid>
            <Grid xs={3} item>
                <Side />
            </Grid>
            <Grid xs={9} item>
                <Content />
            </Grid>
        </Grid>
    </>
}
export default Inbox