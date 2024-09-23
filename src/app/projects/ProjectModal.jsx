import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaLink, FaGithub } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import './../../i18n';
import { useTranslation } from 'react-i18next';

const ProjectModal = ({ isOpen, onClose, projectData }) => {
    const linkHover = {
        fill: "blueTheme.navLinkActive",
        transition: "all ease-in-out 0.5s",
      };
      const [t, i18n ] = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xxl">
      <ModalOverlay />
      <ModalContent margin="auto"  width="90%">
        <ModalHeader fontFamily="Righteous" color={"yellow"} fontSize="2.8rem" alignSelf="center">
        {t(projectData.title)}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="center">
            <Image className="project-modale-image" display="none"
              objectFit="cover"
              src={`images/${projectData.image}.png`}
              alt="project-img"
              minWidth="450px"
              maxHeight="600px"
              padding={"1rem"}
            />
            <Flex direction="column" >
            <Text padding={"2.5px"} color="blueTheme.navLinkActive" fontSize="1.5rem" > {t("projectDescription")} </Text>
            <Text padding={"2.5px"}>{t(projectData.description)}</Text>
            <Text padding={"2.5px"} color="blueTheme.navLinkActive" fontSize="1.5rem" > {t("projectLanguages")}</Text>
            <Text padding={"2.5px"}>{t(projectData.languages)}</Text>
            <Text padding={"2.5px"} color="blueTheme.navLinkActive" fontSize="1.5rem" > {t("projectGroup")}</Text>
            <Text padding={"2.5px"}>{t(projectData.team)}</Text>
            <Flex direction="row"  width="100%" alignItems="center" justifyContent="center" fontSize="3rem" >
            {projectData.link !== null ? (
              <Link href={projectData.link} target="_blank" mr={3} >
               {projectData.type === "WEB-APP" ? (
                <Icon as={FaLink}  _hover={linkHover}/>
                ) :  (
                <Icon as={BiLogoPlayStore}  _hover={linkHover}/>
                )}
              </Link>
            ) : null}
            <Link href={projectData.source} target="_blank" mr={1} >
              <Icon as={FaGithub} _hover={linkHover} />
            </Link>
            </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
