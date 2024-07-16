import { Box, Typography } from "@mui/material"

const Side = () => {
    const data = [{ user: "ami", date: "7AM", subject: "לא מספק", data: "popopppppppppppppppp" }]

    return <div style={{ width: "100%" }}>
        {data.map((row, key) => <Box key={key} bgcolor={"gray"}><Typography variant="h5">{row.user}</Typography>
            <Typography><Typography>{row.subject}</Typography>   {row.date}</Typography>
            <Typography>{row.data.slice(0, 20)}...</Typography>
        </Box>)}
    </div>
}
export default Side