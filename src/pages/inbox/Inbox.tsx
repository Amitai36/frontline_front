import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

import { useGetAllEmail } from "../../api/email/query"
import DisplayEmail from "../../components/DisplayEmail"

const Inbox = () => {
    const { state } = useLocation()
    const { data, isLoading, refetch } = useGetAllEmail({ email: state.email! })
    if (isLoading || !data?.data)
        return <Typography>loading...</Typography>
    return <DisplayEmail data={data.data} refetch={refetch} />
}
export default Inbox