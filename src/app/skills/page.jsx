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
} from "@chakra-ui/react";

import { skillsData } from "../../utils/constants";

const Skills = () => {
  return (
    <Center height="70vh" width="100vw">
      <Box width="80vw" height="100%">
        <Heading className="sub-heading" size="md" my={3}>
          SKILLS
        </Heading>
        <SimpleGrid
          marginTop="4rem"
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(135px, 1fr))"
        >
          {skillsData.map((data, index) => {
            return (
              <Card
                key={index}
                backgroundColor="#213363"
                transition="all .2s ease-in-out"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "#213d8d",
                  transform: "scale(1.1)",
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center">
                  <Icon as={data.icon} width="55px" height="55px" />
                  <Heading my={1} textAlign="center" fontSize= "1.2rem">
                    {data.name}
                  </Heading>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default Skills;
