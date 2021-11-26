import {
  StyledRightPart,
  StyledLeftPart,
  StyledLinksContainer,
  StyledAnchorTag,
  StyledBigContainerIssue,
  StyledContainerArticles,
} from "./CurrentIssue.styled";
import { StyledBigTitle, StyledHr } from "../PodcastContainer/Podcast.styled";
import orangeImg from "./../../images/8315.jpeg";
import { CurrentIssueData } from "../../data/data";
import { StyledArticleDescription } from "../LatestArticles/LatestArticles.styled";
import { StyledAnchor, StyledLowerDetails } from "../Articles/Articles.styled";

export const CurrentIssue = () => {
  return (
    <>
      <StyledHr />
      <StyledBigTitle>Current issue</StyledBigTitle>
      <StyledBigContainerIssue>
        <StyledLeftPart>
          <StyledLinksContainer>
            <div>
              <img src={orangeImg} alt="" />
            </div>
            <StyledAnchorTag>All articles</StyledAnchorTag>
            <StyledAnchorTag>Past issues</StyledAnchorTag>
          </StyledLinksContainer>
        </StyledLeftPart>
        <StyledRightPart>
          {CurrentIssueData.map((article) => (
            <StyledContainerArticles>
              <StyledArticleDescription>
                <a href="/">{article.description}</a>
              </StyledArticleDescription>
              <StyledLowerDetails>
                <hr />
                <StyledAnchor>
                  {article.articleType} {article.sign} {article.date}
                </StyledAnchor>
              </StyledLowerDetails>
            </StyledContainerArticles>
          ))}
        </StyledRightPart>
      </StyledBigContainerIssue>
    </>
  );
};
