import "server-only"
import { contentGraphQLFetcher } from "./fetch";
import { CustomerPostQuery, HeaderNavQuery, HeroQuery, LogoWallQuery } from "types"
import { revalidateTag } from "next/cache";

export const getContentForHero = async(isDraft = false) => {
  const query = `#graphql 
  query HeroCollection {
    heroCollection(preview: ${isDraft ? "true" : "false"}) {
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

  const data = await contentGraphQLFetcher<HeroQuery>({query, preview: isDraft, tags: ['hero']});

  if(!data) {
    throw new Error('Failed to fetch Hero API');
  }

  revalidateTag('hero');

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

export const getContentForHeaderNav = async() => {
  const query = `#graphql
  query NavigationCollection($where: NavigationFilter) {
    navigationCollection(where: $where) {
      items {
        name
        linksCollection {
          items {
            link
            label
          }
        }
      }
    }
  }
  `

  const data = await contentGraphQLFetcher<HeaderNavQuery>({query, variables: {
    "where": {
      "name": "Header"
    }
  }})

  if(!data) {
    throw new Error('Failed to fetch Header Nav API');
  }

  return data;
}

export const getContentForCustomerPost = async(slug: string) => {
  const query = `#graphql
  query CustomerPostCollection($where: CustomerPostFilter) {
    customerPostCollection(where: $where) {
      items {
        title
        slug
        customer {
          logo {
            url
            width
            height
            title
          }
          name
        }
        body {
          json
        }
      }
    }
  }
  `

  const data = await contentGraphQLFetcher<CustomerPostQuery>({query, variables: {
    "where": {
      slug
    }
  }})

  if(!data) {
    throw new Error('Failed to fetch Customer Post API');
  }

  return data;
}

export const getSlugsForPosts = async() => {
  const query = `#graphql
    {
      customerPostCollection {
        items {
          slug
        }
      }
    }
  `

  const data = await contentGraphQLFetcher<{customerPostCollection:{items:{slug:string}[]}}>({query});

  if(!data) {
    throw new Error('Failed to fetch Customer Post slugs API');
  }

  return data;
}