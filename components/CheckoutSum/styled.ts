import styled from "@emotion/styled";
import { Paper } from "styles/Paper";

export const CheckoutSumS = styled(Paper)`
  >div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    span{
      font-size: 14px;
      color: rgb(125, 135, 156);
      font-weight: 400;
    }
    b{
      font-size: 18px;
      font-weight: 600px;
    }
  }
  hr{
    border: 1px solid rgb(243, 245, 249);
    margin: 16px 0;
  }
  .sum-total{
    text-align: right;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 25px;
    margin-top: 0;
  }
  button{
    width: 100%;
  }
`