"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Icon,
  Box,
  Center,
} from "@chakra-ui/react";
import { skillsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Skills = () => (
  <Center height="70vh" width="100vw">
    <Box width="80vw" height="100%">
      <Heading className="sub-heading" size="md" my={3}>
        SKILLS
      </Heading>
      <RevealWrapper className="load-hidden" delay={300}>
        <SimpleGrid
          marginTop="4rem"
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(135px, 1fr))"
          paddingBottom="2rem"
        >
          {skillsData.map((data, index) => (
            <Card
              key={index}
              bg="blueTheme.card"
              transition="all .2s ease-in-out"
              _hover={{
                cursor: "pointer",
                bg: "blueTheme.cardHover",
                transform: "scale(1.05)",
              }}
            >
              <CardBody display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <Icon as={data.icon} w={14} h={14} />
                <Heading my={1} fontSize="1.2rem">
                  {data.name}
                </Heading>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </RevealWrapper>
    </Box>
  </Center>
);

export default Skills;
