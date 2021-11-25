import styled from "styled-components";

export const StyledBigContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 15em minmax(auto, 70em) 15em;
  @media screen and (min-width: 1400px) {
    margin: auto;
  }
`;
