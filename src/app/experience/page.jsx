"use client";
import React from "react";
import WorkCard from "./WorkCard";
import OtherWorkCard from "./OtherWorkCard";

import { Heading, SimpleGrid, Center, Box } from "@chakra-ui/react";
import { education, otherWorkData, workData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";
import './../../i18n';
import { useTranslation } from 'react-i18next';
import Education from "./Education";

const Work = () => {
    const [t, i18n ] = useTranslation();

  return (
    <>
      <Center>
        <Box width={["80vw", "80vw", "79vw"]} height="100%">
          <Heading className="sub-heading" size="md" my={3}>
            {t('professionalex')}
          </Heading>
          <RevealWrapper className="load-hidden" delay={300}>
            <SimpleGrid>
              {workData.map((data, index) => {
                return <WorkCard {...{ data }} key={index} />;
              })}
            </SimpleGrid>
          </RevealWrapper>
          <Heading className="sub-heading" size="md" my={3}>
          {t('otherex')}
          </Heading>
          <RevealWrapper className="load-hidden" delay={300}>
            <SimpleGrid>
              {otherWorkData.map((data, index) => {
                return <OtherWorkCard {...{ data }} key={index} />;
              })}
            </SimpleGrid>
          </RevealWrapper>
          <Heading className="sub-heading" size="md" my={3}>
          {t('education')}
          </Heading>
          <RevealWrapper className="load-hidden" delay={300}>
            <SimpleGrid>
              {education.map((data, index) => {
                return <Education {...{ data }} key={index} />;
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Work;
