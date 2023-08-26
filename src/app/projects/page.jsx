"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Heading, SimpleGrid, HStack, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "../../components/RadioCards";

const Projects = () => {
  const projectsData = [
    {
      type: "WEB-APP",
      title: "Weather App",
      image: "weather-app",
      link: "https://vaheedsk36.github.io/weather-app/",
      source: "https://github.com/vaheedsk36/weather-app",
    },
    {
      type: "WEB-APP",
      title: "Landing Page",
      image: "landing-page",
      link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
      source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
    },
    {
      type: "WEB-APP",
      title: "Guess Game",
      image: "guess-game",
      link: "https://vaheedsk36.github.io/guess-game",
      source: "https://github.com/vaheedsk36/guess-game",
    },
    {
      type: "WEB-APP",
      title: "Notes App",
      image: "react-notes-app",
      link: "https://vaheedsk36.github.io/react-notes-app/",
      source: "https://github.com/vaheedsk36/react-notes-app",
    },
    {
      type: "WEB-APP",
      title: "Dice Multiplayer",
      image: "dice-multiplayer",
      link: "https://vaheedsk36.github.io/dice-multiplayer",
      source: "https://github.com/vaheedsk36/dice-multiplayer",
    },
    {
      type: "PROJECT",
      title: "Snake Game",
      image: "snake-game",
      link: "https://vaheedsk36.github.io/Snake-game",
      source: "",
    },
    {
      type: "PROJECT",
      title: "Delta Assistant",
      image: "delta-assistant",
      link: "https://vaheedsk36.github.io/delta-assistant",
      source: "https://github.com/vaheedsk36/delta-assistant",
    },
    {
      type: "WEB-APP",
      title: "Text Utility App",
      image: "text-utility-app",
      link: "https://vaheedsk36.github.io/text-utility-app/",
      source: "https://github.com/vaheedsk36/text-utility-app",
    },
  ];

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

        <HStack className="radio-btn-container"
          {...group}
        >
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
