import styled from "@emotion/styled";

export const Section = styled.section<{big?: boolean; top?: boolean}>(({theme, big = false, top = false}) => `
  padding: ${big ? "360px 0 180px" :"100px 0"};
  ${top ? "padding-bottom: 0" : ""};
  ${theme.breakpoints.down('md')} {
    padding: ${big ? "140px 0 170px" :"50px 0"};
    ${top ? "padding-bottom: 0" : ""};
  }
`)