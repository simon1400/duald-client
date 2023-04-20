import { Container, Typography } from "@mui/material"
import Page from "layout/Page"
import { Paper } from "styles/Paper"
import Icon from '/public/img/party-popper.svg'
import Button from "components/Button"

const ThankYou = () => {
  return (
    <Page>
      <Container maxWidth="sm">
        <Paper sx={{textAlign: 'center'}}>
          <Icon />
          <Typography variant="h1">{"L'ordine è stato completato!"}</Typography>
          <Typography>{"Riceverete un'e-mail di conferma con i dettagli dell'ordine."}</Typography>
          <Button sx={{mt: 5}} size="large" href="/">Sfoglia i prodotti</Button>
        </Paper>
      </Container>
    </Page>
  )
}

export default ThankYou