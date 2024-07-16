import { Box, Typography } from "@mui/material"

const Content = () => {
    const data = { from: "ami", to: "keren", date: "7AM", subject: "לא מספק", data: "popoppppppppppppppppa" }

    return <div style={{ textAlign: "-webkit-center" }}>
        <Typography>{data.from}</Typography>
        <Typography>to: {data.to}</Typography>
        <Typography>{data.subject}</Typography>
        <Typography>{data.date}</Typography>
        <Box>{data.data}</Box>
    </div>

}
export default Content