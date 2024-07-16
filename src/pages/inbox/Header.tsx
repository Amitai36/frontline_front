import { AppBar, Avatar, Button, ButtonGroup, Grid, Toolbar } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useState } from "react"

import SearchButton from "../../components/SearchButton"
import SendEmail from "../SendEmail"


interface HeaderProps {
    refetch: () => void
}

const Header = (props: HeaderProps) => {
    const { refetch } = props
    const [search, setSearch] = useState('')
    const [sendEmail, setSendEmail] = useState(false)
    const { state: { name, lastName } } = useLocation()

    return <>
        <AppBar >
            <Toolbar>
                <Grid container>
                    <Grid item xs={4} >
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
                    <Grid item xs={6}>
                        <SearchButton value={search} setValue={setSearch} handleSearch={() => console.log("hi")} />
                    </Grid>
                    <Grid item xs={1} width={"100%"}>
                        <Button onClick={() => setSendEmail(prev => !prev)}>new Email</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Avatar>{name[0]}{lastName[0]}</Avatar>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        <SendEmail refech={refetch} setValue={setSendEmail} value={sendEmail} />

    </>
}
export default Header