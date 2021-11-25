import { Container } from "../Container/Container";
import { Articles } from "../Articles/Articles";
import { RightSideArticles } from "../RightSideArticles/RightSideArticles";
import { StyledBigContainer } from "./BigContainer.styled";

export const BigContainer = () => {
  return (
    <>
      <StyledBigContainer>
        <Container
          title="Conflict, extremism, resilience, and peace in South Asia; can covid-19 provide a bridge for rapprochement?"
          article="South Asia is no stranger to conflict, but the pandemic offers an opportunity to put this aside in the interest of public health, say Zulfiqar A Bhutta and colleagues"
        />
        <Articles />
        <RightSideArticles />
      </StyledBigContainer>
    </>
  );
};
