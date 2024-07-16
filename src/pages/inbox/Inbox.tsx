import { Grid, Typography } from "@mui/material"


import Side from "./Side"
import Header from "./Header"
import Content from "./Content"
import { useGetAllEmail } from "../../api/email/query"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { Email } from "../../api/email/types"

const Inbox = () => {
    const { state } = useLocation()
    const [selectData, setSelectData] = useState<{ from: string, date: string, subject: string, content: string }>()
    const [emails, setEmails] = useState<Email[]>([])
    const { data, isLoading, refetch } = useGetAllEmail({ email: state.email! })
    useEffect(() => {
        if (data) {
            setEmails(data.data)
        }
    }, [data])
    if (isLoading || !data?.data)
        return <Typography>loading...</Typography>
    return <Grid container height={"80%"}>
        <Grid xs={12} item>
            <Header emails={emails} setEmails={setEmails} refetch={refetch} />
        </Grid>
        <Grid xs={3} item>
            <Side setSelectData={setSelectData} data={emails} />
        </Grid>
        <Grid xs={9} item>
            <Content selectData={selectData} />
        </Grid>
    </Grid>

}
export default Inbox