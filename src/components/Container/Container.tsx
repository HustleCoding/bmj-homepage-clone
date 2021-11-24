import {
  StyledArticle,
  StyledContainer,
  StyledImage,
  StyledTitle,
  StyledArticleAnchor,
  StyledSecondContainer,
} from "./Container.styled";
import image from "./../../images/Myanmar_Muslims_Bangladesh_MKDKT6.jpeg";

interface Props {
  title: string;
  article: string;
}

export const Container = ({ title, article }: Props) => {
  return (
    <StyledContainer>
      <StyledSecondContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledArticle>{article}</StyledArticle>
        <StyledArticleAnchor href="/">
          ∙ Read our latest coverage of the covid-19 pandemic
        </StyledArticleAnchor>
      </StyledSecondContainer>
      <StyledImage>
        <img src={image} alt="img" />
      </StyledImage>
    </StyledContainer>
  );
};
