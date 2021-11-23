import { StyledAnchorHeader, StyledHeader } from "./Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <ul>
        <StyledAnchorHeader href="/">Our Company</StyledAnchorHeader>
        <StyledAnchorHeader href="/">Subscribe</StyledAnchorHeader>
        <StyledAnchorHeader href="/">My Account</StyledAnchorHeader>
        <StyledAnchorHeader href="/">Login</StyledAnchorHeader>
      </ul>
    </StyledHeader>
  );
}
