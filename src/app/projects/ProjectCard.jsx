import React, { useState } from "react";
import {
  Card,
  ScaleFade,
  Image,
  Text,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaLink, FaGithub } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";

import ProjectModal from "./ProjectModal";

const ProjectCard = (props) => {
  const { title, image, link, source,type} = props.data;
  const [showHover, setShowHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const linkHover = {
    fill: "blueTheme.navLinkActive",
    transition: "all ease-in-out 0.5s",
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ScaleFade initialScale={1.2} in={true} reverse={true}>
        <Text
          style={{
            fontSize: "1.5rem",
            marginBottom: "5px",
            textAlign: "center",
            fontFamily: "Righteous",
          }}
        >
          {title}
        </Text>
        <Card
          onMouseEnter={() => setShowHover(true)}
          onMouseLeave={() => setShowHover(false)}
          zIndex={0}
          boxShadow="0 10px 30px -10px black"
        //   onClick={openModal} // Ouvrir la fenêtre modale au clic
        //   style={{ cursor: "pointer" }}
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
            <Link mr={3} onClick={openModal}>
              <Icon as={BsInfoCircleFill} _hover={linkHover} />
            </Link>

            {link !== null ? (
              <Link href={link} target="_blank" mr={3}>
                {type === "WEB-APP" ? (
                <Icon as={FaLink} _hover={linkHover}/>
                ) :  (
                <Icon as={BiLogoPlayStore}  _hover={linkHover}/>
                )}
              </Link>
            ) : null}
            <Link href={source} target="_blank" mr={1}>
              <Icon as={FaGithub} _hover={linkHover} />
            </Link>
          </Flex>
        </Card>
      </ScaleFade>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectData={props.data}
      />
    </>
  );
};

export default ProjectCard;
