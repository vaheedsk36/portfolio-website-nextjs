"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const Projects = () => {
  const projectsData = [
    {
      type: "web-app",
      title: "Weather App",
      image: "weather-app",
      link: "https://vaheedsk36.github.io/weather-app/",
      source: "https://github.com/vaheedsk36/weather-app",
    },
    {
      type: "web-app",
      title: "Landing Page",
      image: "landing-page",
      link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
      source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
    },
    {
      type: "web-app",
      title: "Guess Game",
      image: "guess-game",
      link: "https://vaheedsk36.github.io/guess-game",
      source: "https://github.com/vaheedsk36/guess-game",
    },
    {
      type: "web-app",
      title: "Notes App",
      image: "react-notes-app",
      link: "https://vaheedsk36.github.io/react-notes-app/",
      source: "https://github.com/vaheedsk36/react-notes-app",
    },
    {
      type: "web-app",
      title: "Dice Multiplayer",
      image: "dice-multiplayer",
      link: "https://vaheedsk36.github.io/dice-multiplayer",
      source: "https://github.com/vaheedsk36/dice-multiplayer",
    },
    {
      type: "web-app",
      title: "Snake Game",
      image: "snake-game",
      link: "https://vaheedsk36.github.io/Snake-game",
      source: "",
    },
    {
      type: "project",
      title: "Delta Assistant",
      image: "delta-assistant",
      link: "https://vaheedsk36.github.io/delta-assistant",
      source: "https://github.com/vaheedsk36/delta-assistant",
    },
    {
      type: "web-app",
      title: "Text Utility App",
      image: "text-utility-app",
      link: "https://vaheedsk36.github.io/text-utility-app/",
      source: "https://github.com/vaheedsk36/text-utility-app",
    },
  ];
  return (
    <>
      <div my={3} className="projects-container">
        <Heading className="sub-heading" size="md" my={3}>
          PROJECTS
        </Heading>

        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
        >
          {projectsData.map((data, index) => {
            return <ProjectCard {...{ data }} key={index} />;
          })}
        </SimpleGrid>
      </div>
    </>
  );
};

export default Projects;
