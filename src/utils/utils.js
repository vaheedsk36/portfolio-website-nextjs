const query = `
query GetUserArticles($page: Int = 0) {
  user(username: "vaheed") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;

export const getArticlesData = async () => {
  // We have to make multiple api request to hasnode using currentPage to get all the articles
  const allArticles = [];
  let currentPage = 0;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await fetch(process.env.NEXT_PUBLIC_HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { page: currentPage },
      }),
    });

    const data = await response.json();
    const articles = data.data.user.publication.posts;

    if (articles.length === 0) {
      // No more articles, exit the loop
      hasNextPage = false;
    } else {
      allArticles.push(...articles);
      currentPage++;
    }
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
