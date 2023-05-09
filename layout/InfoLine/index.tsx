import Chip from "components/Chip"
import { ContactItem, InfoLineS, InfoLineWrapS, LeftS, RightS } from "./styled"
import { Container, Typography } from "@mui/material"
import Lang from "components/Lang"
import useTranslation from "next-translate/useTranslation"
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const InfoLine = () => {
  const { t } = useTranslation('common')
  return (
    <InfoLineWrapS>
      <Container>
        <InfoLineS>
          <LeftS>
            {/* <div>
              <Chip label="HOT"/>
              <Typography>{t`infoLine`}</Typography>
            </div> */}
            <ContactItem href="tel:+393462631996">
              <PhoneIcon />
              <Typography>+39 346 263 1996</Typography>
            </ContactItem>
            <ContactItem href="mailto:info@desua.cz">
              <MailIcon />
              <Typography>info@desua.cz</Typography>
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