import { contentGraphQLFetcher } from "./fetch";
import { type HeroQuery, type LogoWallQuery } from "types"

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
    throw new Error('Failed to fetch Hero API');
  }

  return data;
}

export const getContentForLogoWall = async() => {
  const query = `#graphql
  query Asset($where: AssetFilter) {
    assetCollection(where: $where) {
      items {
        width
        url
        title
        height
      }
    }
  }
  `

  const data = await contentGraphQLFetcher<LogoWallQuery>({query, variables: {
    "where": {
      "title_contains": "client"
    }
  }})

  if(!data) {
    throw new Error('Failed to fetch Logo Wall API');
  }

  return data;
}