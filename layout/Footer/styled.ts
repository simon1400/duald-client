import styled from "@emotion/styled";

export const FooterS = styled.footer(({theme}) => `
  background: black;
  position: fixed;
  height: 100vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: end;
  padding-bottom: 50px;
  p{
    color: rgba(255, 255, 255, 0.8);
    &:last-of-type{
      margin-bottom: 0;
    }
    a{
      color: rgba(255, 255, 255, 0.8);
      &:hover{
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  svg{
    margin-bottom: 50px;
  }
  ${theme.breakpoints.down('md')} {
    svg{
      height: 33px;
      width: auto;
    }
  }
`)

export const CopyrightLogo = styled.a(({theme}) => `
  display: flex;
  align-items: end;
  justify-content: flex-end;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  svg{
    margin-bottom: 0!important;
  }
  ${theme.breakpoints.down('md')} {
    svg{
      height: 24px;
    }
  }
`)