import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

export const ModalS = styled(Dialog)(({theme}) => `
  .MuiPaper-root {
    max-width: 900px;
  }
`)

export const Body = styled.div`
  max-width: 900px;
  display: flex;
  gap: 24px;
  padding: 20px 24px;
  width: 100%;
  align-items: center;
  .close-button{
    position: absolute;
    top: 3px;
    right: 3px;
  }
  hr{
    margin: 0px 0px 16px;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-style: solid;
    border-color: rgb(243, 245, 249);
  }
  h2{
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.5;
    text-transform: none;
    white-space: normal;
  }
`