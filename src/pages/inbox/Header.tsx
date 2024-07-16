import { AppBar, Avatar, Button, ButtonGroup, Grid, Toolbar } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import SearchButton from "../../components/SearchButton"
import SendEmail from "../SendEmail"
import { Email } from "../../api/email/types"


interface HeaderProps {
    refetch: () => void
    emails: Email[]
    setEmails: React.Dispatch<React.SetStateAction<Email[]>>
}

const Header = (props: HeaderProps) => {
    const { refetch, emails, setEmails } = props
    const [search, setSearch] = useState('')
    const [sendEmail, setSendEmail] = useState(false)
    const { state: { name, lastName } } = useLocation()
    const handleSearch = () => {
        const filteringBySubject = emails.filter((email) => email.subject.includes(search))
        setEmails(filteringBySubject)
    }
    useEffect(() => {
        if (!emails) {
            refetch()
        }
    }, [search])
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
                        <SearchButton disabled={!emails} value={search} setValue={setSearch} handleSearch={handleSearch} />
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