"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Heading, SimpleGrid, HStack, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "../../components/RadioCards";
import { projectsData } from "../../utils/constants";

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
    <>
      <div my={3} className="projects-container">
        <Heading className="sub-heading" size="md" my={3}>
          PROJECTS
        </Heading>

        <HStack className="radio-btn-container" {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>

        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
        >
          {selectedData.map((data, index) => {
            return <ProjectCard {...{ data }} key={index} />;
          })}
        </SimpleGrid>
      </div>
    </>
  );
};

export default Projects;
