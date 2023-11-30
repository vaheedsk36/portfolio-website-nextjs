import { query } from "./constants";

export const getArticlesData = async () => {
  const allArticles = [];
  let hasNextPage = true;
  let endCursor="";

  while (hasNextPage) {
    const response = await fetch(process.env.NEXT_PUBLIC_HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { after: endCursor },
      }),
    });
  

  const data = await response.json();
  const articles = data.data.publication.posts.edges;
  allArticles.push(...articles);
  hasNextPage = data.data.publication.posts.pageInfo.hasNextPage;
  endCursor = data.data.publication.posts.pageInfo.endCursor;
  }
  return allArticles;
};

export const subscribeToNewsletter = async (email) => {
  const publicationId = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;
  const url = "/newsletter";
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    email,
    publicationId,
  });

  const requestOptions = {
    method: "POST",
    headers,
    body,
    redirect: "follow",
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
