import { Container } from "@mui/material";
import { HeaderS, HeaderWrap } from "./styled";
import Logo from "components/Logo";
import Search from "layout/Search";
import ControlButtons from "layout/ControlButtons";


const Header = () => {

  return (
    <HeaderWrap>
      <Container>
        <HeaderS>
          <Logo />
          {/* <Search /> */}
          <ControlButtons />
        </HeaderS>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
