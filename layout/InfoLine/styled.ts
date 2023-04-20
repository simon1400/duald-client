import styled from "@emotion/styled";

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
  gap: 8px;
`

export const RightS = styled.div`
  /* display: flex;
  align-items: center;
  gap: 8px; */
`