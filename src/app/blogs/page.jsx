"use client";
import React, { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import { Heading, Spinner, Box, Center } from "@chakra-ui/react";
import NewsLetterComponent from "./NewsLetterComponent";
import { getArticlesData } from "../../utils/utils";

const Blogs = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesData().then((data) => {
      setArticlesData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div mt={3}>
        {isLoading ? (
          <div className="blog-spinner">
            <Spinner
              thickness="10px"
              speed="0.6s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              height={100}
              width={100}
              mb={3}
            />
            <Heading>Loading...</Heading>
          </div>
        ) : (
          <>
            <Center m={5}>
              <Box width="95%" height="100%">
                <Heading className="sub-heading" size="md">
                  Blogs
                </Heading>

                <NewsLetterComponent />

                <div className="blogs-grid-container">
                  {articlesData.map((data, index) => (
                    <ArticlesCard data={data} key={index} />
                  ))}
                </div>
              </Box>
            </Center>
          </>
        )}
      </div>
    </>
  );
};

export default Blogs;
