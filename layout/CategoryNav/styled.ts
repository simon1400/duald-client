import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const CategoryNavS = styled.section`
  border-bottom: 1px solid rgb(243, 245, 249);
  button{
    font-size: 12px;
    text-transform: none;
  }
`

export const ContainerWrap = styled.div<{sticky: boolean}>(({sticky = false}) => `
  z-index: 1000;
  position: ${sticky ? "fixed" : "static"}; 
  top: 0; 
  width: 100%; 
  height: 49px; 
  left: 0;
  background: white;
  box-shadow: ${sticky ? "0px 8px 45px rgba(3, 0, 71, 0.09)" : "none"};
`)