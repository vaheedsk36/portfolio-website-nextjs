"use client";
import React from "react";
import { Card, CardBody, Image, Heading, SimpleGrid } from "@chakra-ui/react";

const Skills = () => {
  const skillsData = [
    {
      filename: "html5",
      name: "HTML5",
    },
    {
      filename: "css3",
      name: "CSS3",
    },
    {
      filename: "javascript",
      name: "Javascript",
    },
    {
      filename: "jquery",
      name: "Jquery",
    },
    {
      filename: "typescript",
      name: "Typescript",
    },
    {
      filename: "sass",
      name: "SASS",
    },
    {
      filename: "bootstrap",
      name: "Bootstrap",
    },
    {
      filename: "cpp",
      name: "C/C++",
    },
    {
      filename: "python",
      name: "Python",
    },
    {
      filename: "react",
      name: "ReactJS",
    },
    {
      filename: "redux",
      name: "Redux",
    },
    {
      filename: "nodejs",
      name: "NodeJs",
    },
    {
      filename: "pug",
      name: "PugJs",
    },
    {
      filename: "express",
      name: "Express",
    },
    {
      filename: "docker",
      name: "Docker",
    },
    {
      filename: "postgres",
      name: "Postgres",
    },
    {
      filename: "postman",
      name: "Postman",
    },
    {
      filename: "github",
      name: "Git/Github",
    },
    {
      filename: "chatgpt",
      name: "Chatgpt",
    },
  ];

  return (
    <div my={3}>
      <Heading size="lg" textAlign="center" my={3} color="white">
        My Tech Stack
      </Heading>
      <SimpleGrid
        p={4}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
      >
        {skillsData.map((data, index) => {
          return (
            <Card
              width={150}
              height={150}
              key={index}
              display="flex"
              alignItems="center"
              _hover={{cursor:'pointer'}}
            >
              <CardBody>
                <Image
                  objectFit="shrink"
                  src={`/images/${data.filename}.svg`}
                  alt={data.name}
                  width={100}
                  height={100}
                />
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
