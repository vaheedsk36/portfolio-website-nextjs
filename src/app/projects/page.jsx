"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Heading } from "@chakra-ui/react";

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
  ];
  return (
    <>
      <div my={3} className="container">
        <Heading className="sub-heading" size="md" my={3}>
          PROJECTS
        </Heading>

        <div
          style={{
            display: "grid",
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
