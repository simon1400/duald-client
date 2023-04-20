import styled from "@emotion/styled";

export const ImgWrap = styled.div(({theme}) => `
  width: 100%;
  height: 0;
  position: relative;
  padding-top: 100%;
  img{
    object-fit: contain;
    object-position: center;
    width: 100%;
  }
  ${theme.breakpoints.down('md')} {
    margin-top: 40px;
    img{
      /* position: relative!important; */
      margin-left: 0;
      width: 100%!important;
      margin-bottom: 0!important;
    }
  }
`)