import styled from "styled-components";

export const StyledArticles = styled.div`
  display: grid;
  align-self: end;
  grid-gap: 10px;
  grid-column: 1 / 4;
  grid-row: 2 / 4;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const StyledArticleTitle = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #4a4c4d;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledArticleDescription = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #5f6163;
  margin-top: 0.25 rem;
  margin-bottom: 1 rem;
  padding-top: 10px;
`;

export const StyledLowerDetails = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #5f6163;
  text-decoration: none;
  text-transform: capitalize;
  padding-top: 30px;
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: #5f6163;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledEachArt = styled.div`
  display: grid;
`;
