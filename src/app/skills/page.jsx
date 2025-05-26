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
  const cardBg = useColorModeValue("white", "gray.800");
  const cardHoverBg = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.700", "white");

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
                  mb={8} 
                  color={textColor}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "40px",
                    height: "3px",
                    backgroundColor: category.skills[0]?.color || "blueTheme.primary",
                    borderRadius: "full",
                    transition: "width 0.3s ease-in-out"
                  }}
                  _hover={{
                    _after: {
                      width: "60px"
                    }
                  }}
                >
                  {category.category}
                </Heading>
                <SimpleGrid
                  spacing={[4, 5, 6]}
                  templateColumns={[
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                    "repeat(5, 1fr)"
                  ]}
                  pt={4}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <Card
                      key={skillIndex}
                      backgroundColor={cardBg}
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      _hover={{
                        cursor: "pointer",
                        backgroundColor: cardHoverBg,
                        transform: "translateY(-8px)",
                        boxShadow: `0 12px 24px -8px ${skill.color}40`,
                        _before: {
                          transform: "scaleX(1)"
                        }
                      }}
                      borderRadius="xl"
                      overflow="hidden"
                      position="relative"
                      _before={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        backgroundColor: skill.color,
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.3s ease-in-out"
                      }}
                    >
                      <CardBody 
                        display="flex" 
                        flexDirection="column" 
                        alignItems="center" 
                        textAlign="center"
                        padding={[3, 4, 6]}
                        position="relative"
                        zIndex={1}
                      >
                        <Box
                          backgroundColor={skill.color}
                          padding={[2, 3, 4]}
                          borderRadius="full"
                          marginBottom={[2, 3, 4]}
                          boxShadow={`0 4px 12px ${skill.color}40`}
                          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                          _hover={{
                            transform: "scale(1.1)",
                            boxShadow: `0 8px 16px ${skill.color}60`
                          }}
                        >
                          <Icon 
                            as={skill.icon} 
                            width={["30px", "35px", "40px"]} 
                            height={["30px", "35px", "40px"]} 
                            color="white"
                            transition="transform 0.3s ease-in-out"
                            _groupHover={{
                              transform: "scale(1.1)"
                            }}
                          />
                        </Box>
                        <Text 
                          fontSize={["0.9rem", "1rem", "1.1rem"]} 
                          fontWeight="medium"
                          color={textColor}
                          transition="color 0.3s ease-in-out"
                          _groupHover={{
                            color: skill.color
                          }}
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
