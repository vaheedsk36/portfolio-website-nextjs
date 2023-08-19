"use client";
import React, { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import { SimpleGrid, Heading } from "@chakra-ui/react";

const Blogs = () => {
  const [articlesData, setArticlesData] = useState([]);

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

  const getArticlesData = async () => {
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

  useEffect(() => {
    getArticlesData().then((data) => {
      setArticlesData(data);
    });
  }, []);

  return (
    <>
      <div mt={3}>
        <Heading size="lg" textAlign="center" mt={3} color="white">My Articles</Heading>
        <SimpleGrid
          p={4}
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
        >
          {articlesData.map((data, index) => (
            <ArticlesCard data={data} key={index} />
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default Blogs;
