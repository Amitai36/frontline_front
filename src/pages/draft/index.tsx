import { useParams } from "react-router-dom"

import { useGetAllDraft } from "../../api/draft/query"
import DisplayEmail from "../../components/DisplayEmail"
import { Typography } from "@mui/material"

const DraftIndex = () => {
    const { id } = useParams()
    const { data, isLoading, refetch } = useGetAllDraft({ userId: id! })
    if (!data || isLoading)
        return <Typography>loading...</Typography>
    return (
        <DisplayEmail data={data.data} refetch={refetch} />
    )
}

export default DraftIndex