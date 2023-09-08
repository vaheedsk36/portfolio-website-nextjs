"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  Heading,
  SimpleGrid,
  HStack,
  useRadioGroup,
  Center,
  Box,
  Flex,
} from "@chakra-ui/react";
import RadioCard from "../../components/RadioCards";
import { projectsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Projects = () => {
  const [selectedData, setSelectedData] = useState(projectsData);
  const valSelectFn = (value) =>
    setSelectedData(() => {
      return value === "ALL"
        ? projectsData
        : projectsData.filter((data) => data.type === value);
    });
  const options = ["ALL", "WEB-APP", "PROJECT"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "project",
    defaultValue: "ALL",
    onChange: valSelectFn,
  });
  const group = getRootProps();

  return (
    <Center>
      <Box width={["90vw", "90vw", "80vw"]} height="100%" marginBottom="4rem">
        <Heading className="sub-heading" size="md" my={3}>
          PROJECTS
        </Heading>

        <Flex {...group} w="100%" px="6" py="5" align="center" justify="center">
          <HStack>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
        </Flex>
        <RevealWrapper delay={300}>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
          >
            {selectedData.map((data, index) => {
              return <ProjectCard {...{ data }} key={index} />;
            })}
          </SimpleGrid>
        </RevealWrapper>
      </Box>
    </Center>
  );
};

export default Projects;
