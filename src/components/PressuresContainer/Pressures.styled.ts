import styled from "styled-components";

export const StyledPressures = styled.div`
  box-sizing: border-box;
  margin: 0
  min-width: 0;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 5fr 3fr;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const StyledLeftSidePressures = styled.div`
  box-sizing: border-box;
  margin: 0.5rem 0px 0px;
  min-width: 0px;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, 1fr);
`;

export const StyledRightSidePressures = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  grid-template-columns: repeat(1, 1fr);
`;

export const StyledJobsTitle = styled.h2`
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
  margin-right: 0.5rem;
`;

export const StyledGreenHr = styled.hr`
  border-top: 2px solid green;
`;
