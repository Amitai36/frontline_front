import { Button, ButtonGroup, Grid, TextField } from "@mui/material"
import { useState } from "react"

const Header = () => {
    const [search, setSearch] = useState('')
    return <>
        <Grid container>
            <Grid item xs={6} >
                <ButtonGroup>
                    <Button>
                        Inbox
                    </Button>
                    <Button>
                        OutBox
                    </Button>
                    <Button>
                        Draft
                    </Button>

                </ButtonGroup>
            </Grid>
            <Grid item xs={5}>
                <TextField label="search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </Grid>
            <Grid item xs={1}>
                <Button>new Email</Button>
            </Grid>
        </Grid>
        
    </>
}
export default Header