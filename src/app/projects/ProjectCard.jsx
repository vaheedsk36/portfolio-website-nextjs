"use client"
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
} from "@chakra-ui/react";

const ProjectCard = () => {
  return (
    <>
      <Card>
        <CardBody>
          <Image objectFit="cover" src="" alt="Chakra UI" />
          <Heading size="md" my={3}>
            Project heading
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
