import styled from "@emotion/styled";

export const CardS = styled.div(({theme}) => `
  overflow: hidden;
  display: block;
  text-decoration: none;
  position: relative;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09);
  border-radius: 8px;
  transition: all 250ms ease-in-out;
  &:hover{
    box-shadow: 0px 8px 45px rgba(3, 0, 71, 0.09);
  }
`)

export const ChipCardWrap = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  z-index: 2;
`

export const ControlButtons = styled.div(({theme}) => `
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 2;
  svg{
    fill: rgba(0, 0, 0, 0.26)
  }
`)

export const ContentCard = styled.div`
  padding: 16px;
  h3{
    margin-bottom: 8px;
    height: 42px;
  }
`

export const ControlCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SliderWrap = styled.div(({theme}) => `
  z-index: 1;
  position: relative;
  .slider-img-wrap{
    margin: 15px;
    width: calc(100% - 30px);
  }
`)

export const SliderVariants = styled.div(({theme}) => `
  padding: 16px;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  > div{
    opacity: .5;
  }
`)