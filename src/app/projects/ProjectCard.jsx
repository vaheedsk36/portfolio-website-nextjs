"use client";
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Stack,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

const ProjectCard = (props) => {
  const { title, techstack, desc, link, source, image } = props.data;
  return (
    <>
      <Card width="25%" m={3}>
        <CardBody>
          <Image
            objectFit="cover"
            src={`images/${image}.png`}
            alt="project-img"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>

            <Text>
              <b>Technologies used:</b>
              {techstack}
            </Text>
            <Text>{desc}</Text>
            <div>
              <Button colorScheme="gray">
                <Link href={link} target="_blank">
                  Open
                </Link>
              </Button>
              <Button colorScheme="gray" mx={3}>
                <Link href={source} target="_blank">
                  Github
                </Link>
              </Button>
            </div>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
