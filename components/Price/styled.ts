import styled from "@emotion/styled";

export const PriceS = styled.div<{big?: boolean}>(({theme, big = false}) => `
  >div:first-of-type{
    display: flex;
    font-size: ${big ? "30px" : "20px"};
    font-weight: ${big ? "700" : "600"};
    white-space: nowrap;
    align-items: center;
    gap: 8px;
    span{
      color: ${theme.palette.primary.main};
    }
    del{
      color: rgb(125, 135, 156); 
      font-size: 12px;
    }
  }
  small{
    display: block;
    font-size: 12px;
    color: rgb(125, 135, 156);
    margin-top: -5px;
  }
`)