import styled from "@emotion/styled"
import PaperMui from "@mui/material/Paper"

export const Paper = styled(PaperMui)`
  box-shadow: rgba(3, 0, 71, 0.09) 0px 1px 3px;
  border-radius: 8px;
  margin-bottom: 32px;
  padding: 24px 28px;
  overflow: hidden;
  position: relative;
  label{
    span{
      font-size: 14px;
      font-weight: 600px;
    }
  }
`