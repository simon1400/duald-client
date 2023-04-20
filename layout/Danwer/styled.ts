import styled from "@emotion/styled";

export const Content = styled.div(({theme}) => `
  width: 400px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  .danwer-top{
    display: flex;
    justify-content: space-between;
    height: 74px;
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
    border-bottom: 1.5px solid rgb(243, 245, 249);
    div{
      display: flex;
      align-items: center;
      span{
        display: inline-block;
        margin-left: 8px;
        font-size: 14px;
        font-weight: 600;
        color: ${theme.palette.secondary.main};
      }
    }
  }
`)

export const DanwerButton = styled.div(({theme}) => `
  align-self: end;
  padding: 20px;
  width: 100%;
  button, a {
    display: block;
    text-align: center;
    width: 100%;
    &:first-of-type {
      /* margin-bottom: 12px; */
    }
  }
`)