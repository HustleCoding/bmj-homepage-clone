import styled from "styled-components";

export const StyledLogoBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
`;

export const StyledNav = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  max-width: container;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  background-color: #2a6ebb;
`;

export const StyledButton = styled.button`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  font-size: inherit;
  padding-left: 3 px;
  padding-right: 3 px;
  padding-top: 2 px;
  padding-bottom: 2 px;
  color: white;
  border: 0;
  border-radius: 4 px;
  text-decoration: none;
  padding-left: 0.6 rem;
  padding-right: 0.6 rem;
  padding-top: 1.25 rem;
  padding-bottom: 1.25 rem;
  border: none;
  color: white;
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-family: InterFace, "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: transparent;

  &:hover {
    -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;

export const StyledButtonContainer = styled.span`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`;

export const StyledRightSideContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  max-width: container;
  margin-left: auto;
  margin-right: auto;
  background-color: #2a6ebb;
  display: flex;
  align-items: center;
  width: auto;
  margin: 0;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
`;

export const StyledAnchorTag = styled.a`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  text-decoration: none;
  padding-left: 0.6 rem;
  padding-right: 0.6 rem;
  padding-top: 1.25 rem;
  padding-bottom: 1.25 rem;
  border: none;
  color: white;
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-family: InterFace, "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  border-radius: 0;
  padding-left: 0.8rem;
  padding-right: 0.8rem;

  &:hover {
    -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
