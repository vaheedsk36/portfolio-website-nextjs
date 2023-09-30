"use client";
import React, { useEffect } from "react";
import DownloadButton from "./DownloadButton";
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import {FaEye} from "react-icons/fa6";
import { RevealWrapper } from "next-reveal";
import "../../styles/main.scss";


const Resume = () => {
  return (
    <Center className="resume-center-container" height="100vh">
      <Box width="80vw">
        <RevealWrapper className="" delay={300} >
          <Heading className="resume-center-text"mr={20} textAlign="center">
            You have the option to view my resume by clicking on the "View"
            button or to download it in PDF format by clicking on the
            "Download" button.
          </Heading>

          <SimpleGrid
            spacing={5}
            justifyContent="center"
            templateColumns="40%"
            paddingBottom="1rem"
            paddingTop="1rem"
          >
            <a  href="https://drive.google.com/file/d/1KzxFClHqPlXXVMJ5KpSrDHqgjYylgdDc/view" target="_blank">
            <Card
                  backgroundColor="blueTheme.card"
                  transition="all .2s ease-in-out"
                  _hover={{
                    cursor: "pointer",
                    backgroundColor: "blueTheme.cardHover",
                    transform: "scale(1.05)",
                  }}
                >
                  <CardBody display="flow" alignItems="center" textAlign="center">
                    <Icon as={FaEye}  width="55px" height="105px" />
                    <Heading my={1} textAlign="center" fontSize="1.2rem">
                      View
                    </Heading>
                  </CardBody>
                </Card>
            </a>
            <DownloadButton/>
          </SimpleGrid>
        </RevealWrapper>
      </Box>
    </Center>
  );
};

export default Resume;
