import styled from "@emotion/styled";

export const ButtonCountS = styled.div<{big: boolean; vertical: boolean}>(({theme, big, vertical}) => `
  display: flex;
  flex-direction: ${vertical ? "column-reverse" : "row"};
  align-items: center;
  button{
    width: ${big ? "42px" : "28px"};
    min-width: ${big ? "42px" : "28px"};
    height: ${big ? "42px" : "28px"};
  }
  span{
    display: inline-block;
    margin: ${big ? "5px 20px" : "2px 10px"} 0;
    font-weight: ${big ? "700" : "600"};
    width: auto;
    text-align: center;
    font-size: ${big ? "20px" : "14px"};
    height: ${big ? "42px" : "28px"};
    color: ${theme.palette.text.primary};
  }
`)