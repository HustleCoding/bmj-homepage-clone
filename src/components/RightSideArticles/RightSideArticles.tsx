import { StyledRightSideArticles } from "./RightSideArticles.styled";
import { rightSideArticles } from "../../data/data";
import {
  StyledEachArt,
  StyledAnchor,
  StyledLowerDetails,
} from "../Articles/Articles.styled";

export const RightSideArticles = () => {
  return (
    <StyledRightSideArticles>
      {rightSideArticles.map((article) => (
        <>
          <StyledEachArt key={article.id}>
            <p>{article.title}</p>
          </StyledEachArt>
          <StyledLowerDetails>
            <StyledAnchor>
              {article.articleType} {article.sign} {article.date}
            </StyledAnchor>
            <hr />
          </StyledLowerDetails>
        </>
      ))}
    </StyledRightSideArticles>
  );
};
