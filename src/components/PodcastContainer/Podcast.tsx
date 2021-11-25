import {
  StyledHr,
  StyledLeftPart,
  StyledPodcast,
  StyledBigTitle,
  StyledRightPart,
  StyledArticlePodcastDescription,
  StyledImageAndArticle,
} from "./Podcast.styled";
import {
  StyledAnchor,
  StyledLowerDetails,
  StyledArticleTitle,
} from "../Articles/Articles.styled";
import { PodcastData, PodcastDataLeft } from "../../data/data";
import { StyledArticleDescription } from "../LatestArticles/LatestArticles.styled";

export const Podcast = () => {
  return (
    <>
      <StyledHr />
      <StyledBigTitle>The Recovery podcast</StyledBigTitle>
      <StyledPodcast>
        <StyledLeftPart>
          {PodcastDataLeft.map((article) => (
            <>
              <StyledArticleTitle>{article.title}</StyledArticleTitle>
              <StyledImageAndArticle>
                <img src={article.img} alt="" />
                <StyledArticlePodcastDescription>
                  <p>{article.description}</p>
                </StyledArticlePodcastDescription>
              </StyledImageAndArticle>
              <StyledLowerDetails>
                <StyledAnchor>
                  {article.articleType} {article.sign} {article.date}
                </StyledAnchor>
                <hr />
              </StyledLowerDetails>
            </>
          ))}
        </StyledLeftPart>
        <StyledRightPart>
          {PodcastData.map((article) => (
            <>
              <StyledArticleDescription>
                <a href="/">{article.description}</a>
              </StyledArticleDescription>
              <StyledLowerDetails>
                <hr />
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
