"use client";
import React, { useState } from "react";
import { Card, ScaleFade, Image, Text, Link, Icon,Flex } from "@chakra-ui/react";
import { FaLink,FaGithub } from "react-icons/fa6";

const ProjectCard = (props) => {
  const { title, image, link, source } = props.data;
  const [showHover, setShowHover] = useState(false);
  const linkHover = {fill:"blueTheme.navLinkActive",transition:"all ease-in-out 0.5s"}

  return (
      <ScaleFade initialScale={1.2} in={true} reverse={true}>
        <Text
          style={{
            fontSize: "1.5rem",
            marginBottom: "5px",
            textAlign: "center",
            fontFamily:"Righteous"
          }}
        >
          {title}
        </Text>
        <Card
            onMouseEnter={() => setShowHover(true)}
            onMouseLeave={() => setShowHover(false)}
            zIndex={0}
            boxShadow="0 10px 30px -10px black"

          >
            <Image
              objectFit="cover"
              src={`images/${image}.png`}
              alt="project-img"
              height="13rem"
            />
            <Flex
            
            height="13rem"
            backgroundColor="hover.gray"
            position="absolute"
            zIndex={showHover ? 1 : 0}
            opacity={showHover ? 1 : 0}
            width="100%"
            transition="all ease-in-out 0.3s"
            alignItems="center"
            justifyContent="center"
            fontSize="2.5rem"
          >
            {
              link !==null ?
              <Link href={link} target="_blank" mr={3}><Icon as={FaLink} _hover={linkHover}/></Link>
              :
              null
            }
            <Link href={source} target="_blank" mr={1}><Icon as={FaGithub} _hover={linkHover}/></Link>
          </Flex>
          </Card>
      </ScaleFade>
  );
};

export default ProjectCard;
