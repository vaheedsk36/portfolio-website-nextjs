"use client";
import React from "react";
import { Card, ScaleFade, Image, Text, Button, Link } from "@chakra-ui/react";

const ProjectCard = (props) => {
  const { title, link, source, image } = props.data;
  return (
    <>
      <ScaleFade initialScale={1.2} in={true} reverse={true}>
        <Text
          style={{
            fontSize: "1.5rem",
            marginBottom: "5px",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        <Card>
          <Image
            objectFit="cover"
            src={`images/${image}.png`}
            alt="project-img"
            height="13rem"
          />
          {/* <Stack mt="6" spacing="3">
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
            </Stack> */}
        </Card>
      </ScaleFade>
    </>
  );
};

export default ProjectCard;
