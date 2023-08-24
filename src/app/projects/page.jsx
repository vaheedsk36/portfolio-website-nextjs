"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const Projects = () => {
  const projectsData = [
    {
      title: "Weather App",
      image: "weather-app",
      techstack: "HTML,CSS,JS",
      desc: `This website empowers users to effortlessly search for weather conditions in any location and instantly access current weather details based on their geographical location.`,
      link: "https://vaheedsk36.github.io/weather-app/",
      source: "https://github.com/vaheedsk36/weather-app",
    },
    {
      title: "Landing Page",
      image: "landing-page",
      techstack: "HTML,CSS,JS,Bootstrap",
      desc: `Made using the vanilla js and bootstrap. This project is a demo landing page for a frontend bootcamp.`,
      link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
      source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
    },
  ];
  return (
    <>
      <div my={3}>
        <Heading size="lg" textAlign="center" my={3} >
          My Projects
        </Heading>

        <div
          style={{
            display: "flex",
          }}
        >
          {projectsData.map((data, index) => {
            return <ProjectCard {...{ data }} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
