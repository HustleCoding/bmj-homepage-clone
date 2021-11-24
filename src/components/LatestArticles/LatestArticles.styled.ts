import styled from "styled-components";

export const StyledLatestArticles = styled.div`
  box-sizing: border-box;
  margin: 1rem;
  min-width: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  margin-top: 2rem;
`;

export const StyledTitle = styled.h1`
  box-sizing: border-box;
  margin: 1rem;
  min-width: 0;
  font-family: InterFace, Arial, sans-serif;
  font-weight: bold;
  line-height: 3.063rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #353637;
`;

export const StyledNewsArticles = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: grid;
  grid-column: 4/4;
  grid-row: 1/11;
`;

export const StyledResearchArticles = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  grid-column: 3/4;
  grid-row: 1/11;
`;

export const StyledEducationArticles = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  grid-column: 2/4;
  grid-row: 1/11;
`;

export const StyledCommentArticles = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  grid-column: 1/4;
  grid-row: 1/11;
`;

export const StyledArticleDescription = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-top: 1rem;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #5f6163;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledSecondTitle = styled.h3`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-family: InterFace, Arial, sans-serif;
  font-weight: bold;
  line-height: 3.063rem;
  font-family: InterFaceBold, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #353637;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  grid-column: 2/4;
  grid-row: 10/11;
`;
