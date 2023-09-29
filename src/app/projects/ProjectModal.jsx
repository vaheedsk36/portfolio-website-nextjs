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
  Flex,
} from "@chakra-ui/react";

const ProjectModal = ({ isOpen, onClose, projectData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xxl">
      <ModalOverlay />
      <ModalContent margin="auto" width="60%">
        <ModalHeader fontFamily="Righteous" color="blueTheme.navLinkActive" fontSize="2.8rem" alignSelf="center">
          {projectData.title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="center">
            <Image
              objectFit="cover"
              src={`images/${projectData.image}.png`}
              alt="project-img"
              height="30rem"
              padding={"1rem"}
            />
            <Flex direction="column" >
            <Text padding={"2.5px"} color="yellow" fontSize="1.5rem" > Description </Text>
            <Text padding={"2.5px"}>{projectData.description}</Text>
            <Text padding={"2.5px"} color="yellow" fontSize="1.5rem" > Languages Used</Text>
            <Text padding={"2.5px"}>{projectData.languages}</Text>
            <Text padding={"2.5px"} color="yellow" fontSize="1.5rem" > Project Type</Text>
            <Text padding={"2.5px"}>{projectData.projectType}</Text>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
