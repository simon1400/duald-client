import Chip from "components/Chip"
import { InfoLineS, InfoLineWrapS, LeftS, RightS } from "./styled"
import { Container, Typography } from "@mui/material"
import Lang from "components/Lang"
import useTranslation from "next-translate/useTranslation"

const InfoLine = () => {
  const { t } = useTranslation('common')
  return (
    <InfoLineWrapS>
      <Container>
        <InfoLineS>
          <LeftS>
            <Chip label="HOT"/>
            <Typography>{t`infoLine`}</Typography>
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