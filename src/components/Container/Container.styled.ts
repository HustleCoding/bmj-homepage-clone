import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 46rem repeat(2, 1fr);
  background-color: #f2f2f2;
  width: 1640px;
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const StyledSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-family: InterFace, Arial, sans-serif;
  font-weight: bold;
  line-height: 3.063rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #353637;
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledArticle = styled.p`
  box-sizing: border-box;
  margin: 0;
  color: #2a6ebb;
  margin-top: 0;
  color: #4a4c4d;
  padding-bottom: 20px;
`;

export const StyledArticleAnchor = styled.a`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  text-decoration: none;
  color: #4a4c4d;
  text-transform: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledImage = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-left: 4.7rem;
`;
