"use client";
import React from "react";
import {
  Card,
  CardBody,
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
import { SiPug, SiExpress, SiPostman,SiGnubash,SiNextdotjs } from "react-icons/si";
import { BsGit, BsMarkdown } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";

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
      name: "NextJS",
      icon: SiNextdotjs,
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
      name: "ChatGPT",
      icon: GiArtificialIntelligence,
    },
    {
      name: "Bash",
      icon: SiGnubash,
    },
    {
      name: "Markdown",
      icon: BsMarkdown
    },
  ];

  return (
    <div className="container">
          <Heading className="sub-heading" size="md" my={3} color="white">
            SKILLS
          </Heading>
      <SimpleGrid
        marginTop="4rem"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(135px, 1fr))"
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
