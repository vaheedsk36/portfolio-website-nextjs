"use client";
import React, { useEffect, useMemo, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import {
  Heading,
  Box,
  Center,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalHeader,
  Link,
} from "@chakra-ui/react";
import NewsLetterComponent from "./NewsLetterComponent";
import { getArticlesData } from "../../utils/utils";
import { FidgetSpinner } from "react-loader-spinner";
import { RevealWrapper } from "next-reveal";

const Blogs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [articlesData, setArticlesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCard, setActiveCard] = useState();
  const activeCardBrief = useMemo(() => {
    // article brief from hashnode, is not completely full itgives ... at end so we have fixed the issue by omitting the string
    const fixedBrief = activeCard?.brief
      ?.substring(0, activeCard.brief.length - 3)
      .split(". ");
    fixedBrief?.pop();
    return `${fixedBrief?.join(". ")}.`;
  }, [activeCard]);
  const onCloseHandler = () => {
    setActiveCard([]);
    onClose();
  };

  useEffect(() => {
    getArticlesData().then((data) => {
      setArticlesData(data.map(data=>data.node));
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
              BLOGS
            </Heading>

            <NewsLetterComponent />
            <RevealWrapper className="load-hidden" delay={300}>
              <SimpleGrid
                spacing={4}
                templateColumns={[
                  "repeat(auto-fill, minmax(250px, 1fr))",
                  "repeat(auto-fill, minmax(250px, 1fr))",
                  "repeat(auto-fill, minmax(300px, 1fr))",
                ]}
              >
                {articlesData?.map((data, index) => (
                  <ArticlesCard
                    key={index}
                    {...{ data, setActiveCard, onOpen }}
                  />
                ))}
              </SimpleGrid>
            </RevealWrapper>
          </Box>
        )}
        <Modal
          isOpen={isOpen}
          onClose={onCloseHandler}
          isCentered
          size={["xs", "md"]}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Link
                href={`https://codersk36.hashnode.dev/${activeCard?.slug}`}
                target="_blank"
              >
                {activeCard?.title}
              </Link>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box my={3}>{activeCardBrief}</Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
};

export default Blogs;
