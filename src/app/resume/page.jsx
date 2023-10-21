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
import { FaEye } from "react-icons/fa6";
import { RevealWrapper } from "next-reveal";
import "../../styles/main.scss";
import './../../i18n';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const [t, i18n ] = useTranslation();

  const viewResumeLink = i18n.language === 'fr' ? "https://drive.google.com/file/d/11XFxxx19PdxrDqMesdOkNnPqdZlvln0B/view" : "https://drive.google.com/file/d/19z0tb-FHrKQjsux4qZRKr00n6Nw431la/view";

  return (
    <Center className="resume-center-container" height="80vh">
      <Box width="80vw">
        <RevealWrapper className="" delay={300}>
          <Heading className="resume-center-text" mr={20} textAlign="center">
            {t('resumeDescription')}
          </Heading>

          <SimpleGrid
            spacing={5}
            justifyContent="center"
            templateColumns="40%"
            paddingBottom="1rem"
            paddingTop="1rem"
          >
            <a href={viewResumeLink} target="_blank">
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
                  <Icon as={FaEye} width="55px" height="105px" />
                  <Heading my={1} textAlign="center" fontSize="0.9rem" className="text-button-resume">
                    {t('resumeView')}
                  </Heading>
                </CardBody>
              </Card>
            </a>
            <DownloadButton />
          </SimpleGrid>
        </RevealWrapper>
      </Box>
    </Center>
  );
};

export default Resume;
