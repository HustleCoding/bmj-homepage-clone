import {
  StyledLeftSidePressures,
  StyledPressures,
  StyledRightSidePressures,
  StyledJobsTitle,
  StyledGreenHr,
} from "./Pressures.styled";
import {
  JobsArticlesData,
  PressuresDataLeft,
  PressuresDataRight,
} from "../../data/data";
import {
  StyledArticlePodcastDescription,
  StyledBigTitle,
  StyledHr,
  StyledImageAndArticle,
  StyledLeftPart,
  StyledPodcast,
  StyledRightPart,
} from "../PodcastContainer/Podcast.styled";
import {
  StyledAnchor,
  StyledArticleTitle,
  StyledLowerDetails,
} from "../Articles/Articles.styled";
import { StyledArticleDescription } from "../LatestArticles/LatestArticles.styled";

export const Pressures = () => {
  return (
    <>
      <StyledPressures>
        <StyledLeftSidePressures>
          <StyledHr />
          <StyledBigTitle>Pressures in primary care</StyledBigTitle>
          <StyledPodcast>
            <StyledLeftPart>
              {PressuresDataLeft.map((article) => (
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
              {PressuresDataRight.map((article) => (
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
        </StyledLeftSidePressures>
        <StyledRightSidePressures>
          <StyledJobsTitle>UK Jobs</StyledJobsTitle>
          <StyledGreenHr />
          {JobsArticlesData.map((article) => (
            <StyledArticleDescription>
              <a href="/">{article.title}</a>
              <hr />
            </StyledArticleDescription>
          ))}
        </StyledRightSidePressures>
      </StyledPressures>
    </>
  );
};
