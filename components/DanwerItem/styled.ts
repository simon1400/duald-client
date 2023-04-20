import styled from "@emotion/styled";

export const DanwerItemS = styled.div(({theme}) => `
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  border-bottom: 1px solid rgb(243, 245, 249);
  .danwer-item-body{
    padding-right: 20px;
    width: 100%;
    span{
      color: ${theme.palette.primary.main};
      font-size: 14px;
      font-weight: 600;
      margin-top: 4px;
      display: block;
    }
  }
  small{
    font-size: 10px;
    line-height: 1.5;
    color: rgb(125, 135, 156);
  }
  h4{
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
  }
`)

export const ImgWrap = styled.div`
  width: 75px;
  min-width: 75px;
  height: 75px;
  position: relative;
  margin: 0 16px;
  img{
    position: relative;
    object-fit: contain;
    object-position: center;

  }
`