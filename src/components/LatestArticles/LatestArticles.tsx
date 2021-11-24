import {
  LatestArticlesNewsData,
  LatestArticlesResearchData,
  LatestArticlesCommentData,
  LatestArticlesEducationData,
} from "../../data/data";
import {
  StyledArticleDescription,
  StyledLatestArticles,
  StyledNewsArticles,
  StyledTitle,
  StyledSecondTitle,
  StyledResearchArticles,
  StyledCommentArticles,
  StyledEducationArticles,
} from "./LatestArticles.styled";

export const LatestArticles = () => {
  return (
    <>
      <StyledTitle>
        <h2>Latest Articles</h2>
      </StyledTitle>

      <StyledLatestArticles>
        {LatestArticlesNewsData.map((article) => (
          <>
            <StyledSecondTitle>
              <h3>{article.title}</h3>
            </StyledSecondTitle>
            <StyledNewsArticles>
              <img src={article.img} alt="" />
            </StyledNewsArticles>
            <StyledArticleDescription>
              <a href="">{article.description}</a>
            </StyledArticleDescription>
          </>
        ))}
        {LatestArticlesResearchData.map((article) => (
          <>
            <StyledSecondTitle>
              <h3>{article.title}</h3>
            </StyledSecondTitle>
            <StyledResearchArticles>
              <img src={article.img} alt="" />
            </StyledResearchArticles>
            <StyledArticleDescription>
              <a href="">{article.description}</a>
            </StyledArticleDescription>
          </>
        ))}
        {LatestArticlesCommentData.map((article) => (
          <>
            <StyledSecondTitle>
              <h3>{article.title}</h3>
            </StyledSecondTitle>
            <StyledCommentArticles>
              <img src={article.img} alt="" />
            </StyledCommentArticles>
            <StyledArticleDescription>
              <a href="">{article.description}</a>
            </StyledArticleDescription>
          </>
        ))}
        {LatestArticlesEducationData.map((article) => (
          <>
            <StyledSecondTitle>
              <h3>{article.title}</h3>
            </StyledSecondTitle>
            <StyledEducationArticles>
              <img src={article.img} alt="" />
            </StyledEducationArticles>
            <StyledArticleDescription>
              <a href="">{article.description}</a>
            </StyledArticleDescription>
          </>
        ))}
      </StyledLatestArticles>
    </>
  );
};
