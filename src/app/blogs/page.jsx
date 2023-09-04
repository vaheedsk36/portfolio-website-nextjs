"use client";
import React, { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import { Heading, Box, Center, SimpleGrid } from "@chakra-ui/react";
import NewsLetterComponent from "./NewsLetterComponent";
import { getArticlesData } from "../../utils/utils";
import { FidgetSpinner } from "react-loader-spinner";

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
      <Center my={5}>
        {isLoading ? (
          <Box
            position="absolute"
            display="flex"
            top="40vh"
            justifyContent="center"
          >
            <FidgetSpinner
              visible={true}
              height="100"
              width="100"
              ariaLabel="dna-loading"
              wrapperClass="dna-wrapper"
              ballColors={["#ff0000", "#00ff00", "#0000ff"]}
              backgroundColor="white"
            />
          </Box>
        ) : (
          <Box width={["87vw", "87vw", "95vw"]} height="100%">
            <Heading className="sub-heading" size="md">
              Blogs
            </Heading>

            <NewsLetterComponent />

            <SimpleGrid
              spacing={4}
              templateColumns={[
                "repeat(auto-fill, minmax(250px, 1fr))",
                "repeat(auto-fill, minmax(250px, 1fr))",
                "repeat(auto-fill, minmax(300px, 1fr))",
              ]}
            >
              {articlesData.map((data, index) => (
                <ArticlesCard data={data} key={index} />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Center>
    </>
  );
};

export default Blogs;
