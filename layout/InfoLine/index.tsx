import Chip from "components/Chip"
import { ContactItem, InfoLineS, InfoLineWrapS, LeftS, RightS } from "./styled"
import { Container, Typography } from "@mui/material"
import Lang from "components/Lang"
import useTranslation from "next-translate/useTranslation"
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { useQuery } from "@apollo/client"
import { getContact } from "queries/contact"
import { useRouter } from "next/router"

const InfoLine = () => {
  const { t } = useTranslation('common')

  const router = useRouter()

  const {data, loading} = useQuery(getContact, {
    variables: {
      locale: router.locale
    }
  })

  if(loading) {
    return null
  }

  console.log(data)

  const contact = data.contact.data.attributes

  return (
    <InfoLineWrapS>
      <Container>
        <InfoLineS>
          <LeftS>
            {/* <div>
              <Chip label="HOT"/>
              <Typography>{t`infoLine`}</Typography>
            </div> */}
            <ContactItem href={contact.phone.link}>
              <PhoneIcon />
              <Typography>{contact.phone.text}</Typography>
            </ContactItem>
            <ContactItem href={contact.email.link}>
              <MailIcon />
              <Typography>{contact.email.text}</Typography>
            </ContactItem>
          </LeftS>
          <RightS>
            <Lang />
          </RightS>
        </InfoLineS>
      </Container>
    </InfoLineWrapS>
  )
}

export default InfoLine