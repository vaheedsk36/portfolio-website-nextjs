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

const variables = { page: 0 };

export const getArticlesData = async () => {
  const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const data = await response.json();
  return data.data.user.publication.posts;
};

export const subscribeToNewsletter = async (email) => {
  const publicationId = "64ce5fd6058075dab96ec972";
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
