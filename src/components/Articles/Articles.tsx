import {
  StyledArticles,
  StyledArticleTitle,
  StyledLowerDetails,
  StyledAnchor,
  StyledArticleDescription,
  StyledEachArt,
} from "./Articles.styled";
import { articlesData } from "../../data/data";

export const Articles = () => {
  return (
    <StyledArticles>
      {articlesData.map((article) => (
        <StyledEachArt key={article.id}>
          <img src={article.img} alt="" />
          <StyledArticleTitle>
            <p>{article.title}</p>
          </StyledArticleTitle>
          <StyledArticleDescription>
            <p>{article.description}</p>
          </StyledArticleDescription>
          <StyledLowerDetails>
            <StyledAnchor>
              {article.articleType} {article.sign} {article.date}
            </StyledAnchor>
          </StyledLowerDetails>
        </StyledEachArt>
      ))}
    </StyledArticles>
  );
};
