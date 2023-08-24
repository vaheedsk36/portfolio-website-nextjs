"use client";
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import { SiPug, SiExpress, SiPostman } from "react-icons/si";
import { BsGit, BsMarkdown } from "react-icons/bs";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML5",
      icon: FaHtml5,
    },
    {
      name: "CSS3",
      icon: FaCss3,
    },
    {
      name: "Javascript",
      icon: TbBrandJavascript,
    },
    {
      name: "Jquery",
      icon: BiLogoJquery,
    },
    {
      name: "Typescript",
      icon: TbBrandTypescript,
    },
    {
      name: "SASS",
      icon: FaSass,
    },
    {
      name: "Bootstrap",
      icon: TbBrandBootstrap,
    },
    {
      name: "C/C++",
      icon: TbBrandCpp,
    },
    {
      name: "Python",
      icon: FaPython,
    },
    {
      name: "ReactJS",
      icon: FaReact,
    },
    {
      name: "Redux",
      icon: TbBrandRedux,
    },
    {
      name: "NodeJs",
      icon: FaNodeJs,
    },
    {
      name: "PugJs",
      icon: SiPug,
    },
    {
      name: "Express",
      icon: SiExpress,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "Postgres",
      icon: BiLogoPostgresql,
    },
    {
      name: "Postman",
      icon: SiPostman,
    },
    {
      name: "Git",
      icon: BsGit,
    },
    {
      name: "Github",
      icon: FaGithub,
    },
    {
      name: "Chatgpt",
      icon: FaGithub,
    },
    {
      name: "Markdown",
      icon: BsMarkdown
    },
  ];

  return (
    <div my={3} className="container">
      <Heading size="lg" textAlign="center" my={3} color="white">
        My Tech Stack
      </Heading>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
      >
        {skillsData.map((data, index) => {
          return (
            <Card
            className="skills-card"
              key={index}
              _hover={{ cursor: "pointer" }}
            >
              <CardBody display="flow" alignItems="center" textAlign="center">
                <Icon as={data.icon} width={55} height={55} />
                <Heading size="md" my={1} textAlign="center">
                  {data.name}
                </Heading>
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Skills;
