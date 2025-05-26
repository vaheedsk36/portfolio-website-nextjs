"use client";
import React from "react";
import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Box,
  Text,
  VStack,
  useColorModeValue,
  Container,
  Flex,
  Badge,
  Icon,
} from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Page = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const highlightColor = useColorModeValue("blue.500", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardHoverBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box width="100%" minHeight="100vh" py={8}>
      <Container maxW="container.xl" px={4}>
        <RevealWrapper className="load-hidden" id="about" delay={300}>
          <VStack spacing={8} align="stretch">
            <Heading 
              className="sub-heading" 
              size="md"
            >
              ABOUT
            </Heading>

            <SimpleGrid
              columns={[1, null, 2]}
              gap={8}
              templateColumns={[null, null, "35% 65%"]}
            >
              <Box
                position="relative"
                _hover={{
                  transform: "translateY(-5px)",
                  transition: "transform 0.3s ease-in-out"
                }}
              >
                <Image
                  objectFit="cover"
                  src="/images/profile.png"
                  alt="profile-image"
                  width="100%"
                  height="auto"
                  borderRadius="xl"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
                  }}
                />
                <Flex 
                  position="absolute" 
                  bottom={4} 
                  right={4} 
                  gap={2}
                >
                  <Badge
                    as="a"
                    href="https://github.com/vaheedsk36"
                    target="_blank"
                    rel="noopener noreferrer"
                    px={3}
                    py={1}
                    borderRadius="full"
                    backgroundColor={cardBg}
                    color={highlightColor}
                    cursor="pointer"
                    transition="all 0.3s ease-in-out"
                    _hover={{
                      backgroundColor: highlightColor,
                      color: "white",
                      transform: "translateY(-2px)"
                    }}
                  >
                    <Icon as={FaGithub} mr={2} />
                    GitHub
                  </Badge>
                  <Badge
                    as="a"
                    href="https://www.linkedin.com/in/sk36/"
                    target="_blank"
                    rel="noopener noreferrer"
                    px={3}
                    py={1}
                    borderRadius="full"
                    backgroundColor={cardBg}
                    color={highlightColor}
                    cursor="pointer"
                    transition="all 0.3s ease-in-out"
                    _hover={{
                      backgroundColor: highlightColor,
                      color: "white",
                      transform: "translateY(-2px)"
                    }}
                  >
                    <Icon as={FaLinkedin} mr={2} />
                    LinkedIn
                  </Badge>
                </Flex>
              </Box>

              <VStack 
                align="stretch" 
                spacing={6}
                backgroundColor={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="0 4px 12px rgba(0,0,0,0.05)"
                transition="all 0.3s ease-in-out"
                _hover={{
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  transform: "translateY(-5px)"
                }}
              >
                <Heading 
                  size="xl" 
                  bgGradient={`linear(to-r, ${highlightColor}, ${highlightColor}80)`}
                  bgClip="text"
                  fontWeight="bold"
                >
                  👋 Hey there
                </Heading>
                <Text 
                  fontSize="lg" 
                  color={textColor}
                  lineHeight="tall"
                >
                  I&apos;m <span style={{ color: highlightColor, fontWeight: "bold" }}>Vaheed</span>, a passionate
                  software developer. I specialize in{" "}
                  <span style={{ color: highlightColor, fontWeight: "bold" }}>Web Development</span>, crafting
                  seamless user experiences and robust backend solutions. With a
                  knack for problem-solving, I thrive on creating elegant code
                  that makes an impact. I&apos;m always exploring new tools and
                  techniques to stay at the forefront of the ever-evolving tech
                  landscape.
                </Text>
                <Text 
                  fontSize="lg" 
                  color={textColor}
                  lineHeight="tall"
                >
                  📫 Open to collaborations and exciting projects, I&apos;m
                  eager to connect with fellow developers and tech enthusiasts.
                  Let&apos;s build something amazing together!
                </Text>
                <Text 
                  fontSize="lg" 
                  color={textColor}
                  lineHeight="tall"
                >
                  Happy coding! 🖥️
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </RevealWrapper>

        <RevealWrapper className="load-hidden" id="interests" delay={600}>
          <VStack spacing={8} align="stretch" mt={12}>
            <Heading 
              className="sub-heading" 
              size="md"
            >
              INTERESTS
            </Heading>
            <SimpleGrid
              spacing={6}
              templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
            >
              {interestsData.map((data, index) => (
                <InterestsCard
                  interest={data.interest}
                  icon={data.icon}
                  key={index}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </RevealWrapper>
      </Container>
    </Box>
  );
};

export default Page;
