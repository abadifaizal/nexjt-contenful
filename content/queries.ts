import { contentGraphQLFetcher } from "./fetch";
import { type HeroQuery } from "types"

export const getContentForHero = async() => {
  const query = `#graphql 
  query HeroCollection {
    heroCollection {
      items {
        title
        subtitle
        preTitle
        callToActionsCollection {
          items {
            link
            label
          }
        }
      }
    }
  }
  `

  const data = await contentGraphQLFetcher<HeroQuery>({query});

  if(!data) {
    throw new Error('Failed to fetch API');
  }

  return data;
}