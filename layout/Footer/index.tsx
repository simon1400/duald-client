import { Container, Grid, Typography } from "@mui/material"
import { FooterS } from "./styled"
import Logo from "components/Logo"
// import globalQuery from "queries/global"
// import { useQuery } from "@apollo/client"
// import { useRouter } from "next/router"

const Footer = () => {

  // const router = useRouter()

  // const {data, loading} = useQuery(globalQuery, {
  //   variables: {locale: router.locale}
  // })

  // if(loading) {
  //   return <></>
  // }

  return (
    <FooterS>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={4}>
            <Logo />
            <Typography component="div">
              <p>Azienda di logistica con consegna gratuita di prodotti cechi nel nord Italia.</p>
              <p>Tutti i diritti riservati.</p>
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            
          </Grid>
          <Grid item xs={12} md={2}>
            
          </Grid>
          <Grid item xs={12} md={2}>
            <ul>
              <li>Dmytro Pechunka</li>
              <li>IČO: 17407613</li>
              <li>Brno-střed, Zábrdovice</li>
              <li>Bratislavská 184/2a</li>
              <li>602 00</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </FooterS>
  )
}

export default Footer