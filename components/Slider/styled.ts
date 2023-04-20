import styled from "@emotion/styled";

export const SwiperNav = styled.div(({theme}) => `
  display: flex;
  button{
    border: none;
    background: transparent;
    transition: all .5s ease;
    padding: 15px;
  }
`)

export const SliderWrap = styled.div(({theme}) => `
  z-index: 1;
  width: 400px;
  height: 400px;
  position: relative;
  overflow: hidden;
`)