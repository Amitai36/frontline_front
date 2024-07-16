import { Grid } from "@mui/material"
import Header from "../pages/inbox/Header"
import Side from "../pages/inbox/Side"
import Content from "../pages/inbox/Content"
import { Email } from "../api/email/types"
import { Draft } from "../api/draft/types"
import { useEffect, useState } from "react"

interface DisplayEmailProps {
    data: Email[] | Draft[]
    refetch: () => void
}

const DisplayEmail = (props: DisplayEmailProps) => {
    const { data, refetch } = props
    const [emails, setEmails] = useState<Email[] | Draft[]>([])
    const [selectData, setSelectData] = useState<{ to?: string, from?: string, date: string, subject: string, content: string }>()

    useEffect(() => {
        if (data) {
            setEmails(data)
        }
    }, [data])

    return <>
        <Grid container height={"80%"}>
            <Grid xs={12} item>
                <Header emails={emails} setEmails={setEmails} refetch={refetch} />
            </Grid>
            <Side data={data} setSelectData={setSelectData} />
            <Grid xs={9} item>
                <Content selectData={selectData} />
            </Grid>
        </Grid>
    </>
}
export default DisplayEmail