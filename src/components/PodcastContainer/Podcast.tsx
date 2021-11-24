import {
  StyledHr,
  StyledLeftPart,
  StyledPodcast,
  StyledBigTitle,
  StyledRightPart,
} from "./Podcast.styled";
import {
  StyledAnchor,
  StyledLowerDetails,
  StyledArticleTitle,
} from "../Articles/Articles.styled";
import { StyledArticleDescription } from "../LatestArticles/LatestArticles.styled";
import { PodcastData, PodcastDataLeft } from "../../data/data";

export const Podcast = () => {
  return (
    <>
      <StyledHr />
      <StyledBigTitle>The Recovery podcast</StyledBigTitle>
      <StyledPodcast>
        <StyledLeftPart>
          {PodcastDataLeft.map((article) => (
            <>
              <hr />
              <StyledArticleTitle>{article.title}</StyledArticleTitle>
              <img src={article.img} alt="" />
              <StyledLowerDetails>
                <StyledAnchor>
                  {article.articleType} {article.sign} {article.date}
                </StyledAnchor>
                <StyledArticleDescription>
                  <p>{article.description}</p>
                </StyledArticleDescription>
              </StyledLowerDetails>
            </>
          ))}
        </StyledLeftPart>
        <StyledRightPart>
          {PodcastData.map((article) => (
            <>
              <StyledArticleDescription>
                <a href="">{article.description}</a>
              </StyledArticleDescription>
              <StyledLowerDetails>
                <StyledAnchor>
                  {article.articleType} {article.sign} {article.date}
                </StyledAnchor>
              </StyledLowerDetails>
            </>
          ))}
        </StyledRightPart>
      </StyledPodcast>
    </>
  );
};
