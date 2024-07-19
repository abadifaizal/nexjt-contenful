export const contentGraphQLFetcher = async<T>({
  query, variables = {}, preview = false
}:{query: string, variables?: any, preview?: boolean}): Promise<T | undefined> => {
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': preview ? `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}` : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({query, variables})
  });

  const {data, error} = await response.json();

  if(error) {
    console.error(error);
    throw new Error('Failed to fetch API');
  }

  return data as T;
}