import styled from "styled-components";

export const StyledBigTitle = styled.h3`
  box-sizing: border-box;
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
`;

export const StyledPodcast = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 370px 0;
`;

export const StyledHr = styled.hr`
  border-top: 2px solid blue;
`;

export const StyledLeftPart = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 0px;
`;

export const StyledRightPart = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 0px;
`;
