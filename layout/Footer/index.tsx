import { Container, Grid, Typography } from "@mui/material"
import { CopyrightLogo, FooterS } from "./styled"
import Logo from 'public/assets/kersnerova-logo.svg'
import Hardart from 'public/assets/hardart.svg'
import globalQuery from "queries/global"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const Footer = () => {

  const router = useRouter()

  const {data, loading} = useQuery(globalQuery, {
    variables: {locale: router.locale}
  })

  if(loading) {
    return <></>
  }

  return (
    <FooterS>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={6}>
            <Logo fill="#fff" width="286" height="50" />
            <Typography component="div" dangerouslySetInnerHTML={{__html: data.global.data.attributes.footerInfo}} />
          </Grid>
          <Grid item xs={6}>
            <CopyrightLogo href="mailto:daniel.kokes@gmail.com,dmytro@pechunka.com">
              <Hardart />
            </CopyrightLogo>
          </Grid>
        </Grid>
      </Container>
    </FooterS>
  )
}

export default Footer