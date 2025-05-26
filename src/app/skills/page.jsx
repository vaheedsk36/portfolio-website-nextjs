"use client";
import React from "react";
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Icon,
  Box,
  Center,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { skillsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Skills = () => {
  const cardBg = useColorModeValue("blueTheme.card", "blueTheme.card");
  const cardHoverBg = useColorModeValue("blueTheme.cardHover", "blueTheme.cardHover");

  return (
    <Center minHeight="100vh" width="100vw" py={8}>
      <Box width={["95vw", "90vw", "80vw"]}>
        <Heading className="sub-heading" size="md" my={3}>
          SKILLS
        </Heading>
        <RevealWrapper className="load-hidden" delay={300}>
          <VStack spacing={8} align="stretch">
            {skillsData.map((category, categoryIndex) => (
              <Box key={categoryIndex}>
                <Heading 
                  size="sm" 
                  mb={4} 
                  color="blueTheme.primary"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Box 
                    width="4px" 
                    height="20px" 
                    backgroundColor="blueTheme.primary"
                    borderRadius="full"
                  />
                  {category.category}
                </Heading>
                <SimpleGrid
                  spacing={[3, 4, 5]}
                  templateColumns={[
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                    "repeat(5, 1fr)"
                  ]}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <Card
                      key={skillIndex}
                      backgroundColor={cardBg}
                      transition="all .3s ease-in-out"
                      _hover={{
                        cursor: "pointer",
                        backgroundColor: cardHoverBg,
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                      }}
                      borderRadius="lg"
                      overflow="hidden"
                    >
                      <CardBody 
                        display="flex" 
                        flexDirection="column" 
                        alignItems="center" 
                        textAlign="center"
                        padding={[3, 4, 6]}
                      >
                        <Box
                          backgroundColor="blueTheme.primary"
                          padding={[2, 3, 4]}
                          borderRadius="full"
                          marginBottom={[2, 3, 4]}
                          boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                        >
                          <Icon 
                            as={skill.icon} 
                            width={["30px", "35px", "40px"]} 
                            height={["30px", "35px", "40px"]} 
                            color="white"
                          />
                        </Box>
                        <Text 
                          fontSize={["0.9rem", "1rem", "1.1rem"]} 
                          fontWeight="medium"
                          color="blueTheme.text"
                        >
                          {skill.name}
                        </Text>
                      </CardBody>
                    </Card>
                  ))}
                </SimpleGrid>
              </Box>
            ))}
          </VStack>
        </RevealWrapper>
      </Box>
    </Center>
  );
};

export default Skills;
