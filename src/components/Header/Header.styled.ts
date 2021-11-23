import styled from "styled-components";

export const StyledAnchorHeader = styled.a`
  box-sizing: border-box;
  margin: 10px;
  min-width: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #235b9a;
  padding: 0.25 rem;
  margin-right: 1 rem;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    color: #2a6ebb;
  }
`;

export const StyledHeader = styled.header`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  min-width: 0;
  width: 100%;
  max-width: container;
  max-width: 80 rem;
  background-color: #e5e6e6;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
