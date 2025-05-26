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
  Input,
  Select,
  Flex,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import NewsLetterComponent from "./NewsLetterComponent";
import { getArticlesData } from "../../utils/utils";
import { FidgetSpinner } from "react-loader-spinner";
import { RevealWrapper } from "next-reveal";

const Blogs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [articlesData, setArticlesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCard, setActiveCard] = useState();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  // Color mode values for controls (move hooks to top level)
  const controlsBg = useColorModeValue("white", "gray.800");
  const controlsBorder = useColorModeValue("gray.200", "gray.700");
  const controlsShadow = useColorModeValue("md", "dark-lg");
  const inputBg = useColorModeValue("gray.50", "gray.700");

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

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articlesData.filter(article => {
      const searchLower = search.toLowerCase();
      return (
        article.title.toLowerCase().includes(searchLower) ||
        article.brief?.toLowerCase().includes(searchLower)
      );
    });
    
    return filtered.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [articlesData, search, sortOrder]);

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
            {/* Attractive Controls Row */}
            <Box
              mt={6}
              mb={4}
              width="100%"
              px={[2, 4, 8]}
              py={[3, 4]}
              borderRadius="xl"
              bg={controlsBg}
              borderWidth="1px"
              borderColor={controlsBorder}
              boxShadow={controlsShadow}
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "stretch", md: "center" }}
              justifyContent="space-between"
              gap={{ base: "24px", md: "60%" }}
            >
              <InputGroup maxW={{ base: "100%", md: "60%" }}>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search articles..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  borderRadius="lg"
                  bg={inputBg}
                  _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #4299e1" }}
                  _hover={{ borderColor: "blue.300" }}
                  fontSize="md"
                  h="45px"
                />
              </InputGroup>
              <Select
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
                borderRadius="lg"
                bg={inputBg}
                _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #4299e1" }}
                _hover={{ borderColor: "blue.300" }}
                fontSize="md"
                maxW={{ base: "100%", md: "40%" }}
                h="45px"
                position="relative"
                zIndex={1}
                sx={{
                  '& option': {
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    padding: '8px'
                  }
                }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </Select>
            </Box>
            <RevealWrapper className="load-hidden" delay={300}>
              <SimpleGrid
                spacing={4}
                templateColumns={[
                  "repeat(auto-fill, minmax(250px, 1fr))",
                  "repeat(auto-fill, minmax(250px, 1fr))",
                  "repeat(auto-fill, minmax(300px, 1fr))",
                ]}
              >
                {filteredAndSortedArticles?.map((data, index) => (
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
