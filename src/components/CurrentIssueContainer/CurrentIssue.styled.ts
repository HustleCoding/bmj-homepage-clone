import styled from "styled-components";

export const StyledBigContainerIssue = styled.div`
  box-sizing: border-box;
  margin: 1rem;
  min-width: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 6fr;
  margin-top: 0.5rem;
  -webkit-align-items: start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start;
`;

export const StyledLeftPart = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: grid;
  grid-gap: 0;
  -webkit-align-content: start;
  -ms-flex-line-pack: start;
  align-content: start;
  grid-template-columns: repeat(1, 1fr);
`;

export const StyledLinksContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  margin-left: 1rem;
  margin-top: 0.25rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const StyledAnchorTag = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #2a6ebb;
  margin-bottom: 0.5rem;
`;

export const StyledRightPart = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0px;
  display: grid;
  gap: 2rem;
  grid-template-columns: 2fr 4fr;
`;

export const StyledContainerArticles = styled.div`
  margin: 0;
  padding: 0;
`;
