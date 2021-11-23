import {
  StyledLogoBar,
  StyledNav,
  StyledButton,
  StyledButtonContainer,
  StyledRightSideContainer,
  StyledAnchorTag,
} from "./Nav-Bar.styled";
import SearchIcon from "@material-ui/icons/Search";
import logo from "./../../images/thebmj-logo-large.png";

interface Props {
  btnOne: string;
  btnTwo: string;
  btnThree: string;
  btnFour: string;
  btnFive: string;
}

export default function NavBar({
  btnOne,
  btnTwo,
  btnThree,
  btnFour,
  btnFive,
}: Props) {
  return (
    <div>
      <StyledNav>
        <StyledLogoBar>
          <StyledAnchorTag href="/">
            <img src={logo} alt="The BMJ Logo" />
          </StyledAnchorTag>
          <StyledButtonContainer>
            <StyledAnchorTag href="/coronavirus">covid-19</StyledAnchorTag>
            <StyledButton>{btnOne}</StyledButton>
            <StyledButton>{btnTwo}</StyledButton>
            <StyledButton>{btnThree}</StyledButton>
            <StyledButton>{btnFour}</StyledButton>
            <StyledButton>{btnFive}</StyledButton>
          </StyledButtonContainer>
        </StyledLogoBar>
        <StyledRightSideContainer>
          <StyledAnchorTag href="">Archive</StyledAnchorTag>
          <StyledAnchorTag href="">For authors</StyledAnchorTag>
          <StyledAnchorTag href="">Hosted</StyledAnchorTag>

          <StyledAnchorTag href="">
            <SearchIcon style={{ color: "#77A2D3", height: "24" }} />
            Search
          </StyledAnchorTag>
        </StyledRightSideContainer>
      </StyledNav>
    </div>
  );
}
