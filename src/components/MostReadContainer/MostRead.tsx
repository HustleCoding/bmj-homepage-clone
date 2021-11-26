import {
  FirstColumnData,
  SecondColumnData,
  ThirdColumnData,
} from "../../data/data";
import { StyledArticleDescription } from "../LatestArticles/LatestArticles.styled";
import { StyledHr } from "../PodcastContainer/Podcast.styled";
import {
  StyledFirstColumn,
  StyledMostRead,
  StyledMostReadTitle,
  StyledSecondColumn,
  StyledThirdColumn,
} from "./MostRead.styled";

export const MostRead = () => {
  return (
    <>
      <StyledMostReadTitle>Most read</StyledMostReadTitle>
      <StyledHr />
      <StyledMostRead>
        <StyledFirstColumn>
          {FirstColumnData.map((article) => (
            <ol>
              <li value={article.id}>
                <StyledArticleDescription>
                  <a href="/">{article.title}</a>
                </StyledArticleDescription>
              </li>
            </ol>
          ))}
        </StyledFirstColumn>
        <StyledSecondColumn>
          {SecondColumnData.map((article) => (
            <ol>
              <li value={article.id}>
                <StyledArticleDescription>
                  <a href="/">{article.title}</a>
                </StyledArticleDescription>
              </li>
            </ol>
          ))}
        </StyledSecondColumn>
        <StyledThirdColumn>
          {ThirdColumnData.map((article) => (
            <ol>
              <li value={article.id}>
                <StyledArticleDescription>
                  <a href="/">{article.title}</a>
                </StyledArticleDescription>
              </li>
            </ol>
          ))}
        </StyledThirdColumn>
      </StyledMostRead>
    </>
  );
};
