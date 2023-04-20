import styled from "@emotion/styled";

export const HeaderWrap = styled.header(({theme}) => `
  background: white;
  border-bottom: 1px solid rgb(243, 245, 249);
  height: 80px;
  display: flex;
  align-items: center;
`)

export const HeaderS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo-wrap{
    display: block;
    height: 40px;
    svg{
      height: 40px;
    }
  }
`