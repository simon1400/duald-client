import styled from "@emotion/styled";

export const FooterS = styled.footer(({theme}) => `
  background: ${theme.palette.secondary.main};
  padding: 100px 0;
  svg{
    height: 40px;
    margin-bottom: 20px;
  }
  p, ul li{
    color: #AEB4BE;
    font-size: 14px;
  }
  h2{
    color: white;
  }
`)