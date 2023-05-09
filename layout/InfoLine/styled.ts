import styled from "@emotion/styled";
import Link from "next/link";

export const InfoLineWrapS = styled.section(({theme}) => `
  background-color: ${theme.palette.secondary.main};
`)

export const InfoLineS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px; 
  p{
    color: white;
    font-size: 12px;
  }
`

export const LeftS = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const RightS = styled.div`
  /* display: flex;
  align-items: center;
  gap: 8px; */
`

export const ContactItem = styled(Link)(({theme}) => `
  display: flex;
  color: white;
  text-decoration: none;
  align-items: center;
  p{
    font-size: 14px;
    margin-bottom: 0;
  }
  svg{
    color: white;
    margin-right: 8px;
  }
  ${theme.breakpoints.down("sm")} {
    p{
      font-size: 12px;
    }
    svg{
      color: white;
      margin-right: 4px;
    }
  }
`)