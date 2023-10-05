"use client";
import React from "react";
import Education from "./Education";
import { education } from "../../utils/constants";

import './../../i18n';
import { useTranslation } from 'react-i18next';


import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Page = () => {
    const [t, i18n ] = useTranslation();

  return (
    <>
      <Center m={5}>
        <Box width="80vw" height="100%">
          <RevealWrapper className="load-hidden" id="about" delay={300}>
            <Heading className="sub-heading" size="md" my={3}>
              {t('about')}
            </Heading>
            <SimpleGrid
              columns={[1, null, 2]}
              gap={6}
              fontSize="1.1rem"
              marginBottom="4rem"
              templateColumns={[null, null, "30% 70%"]}
            >
              <Image
                objectFit="shrink"
                src="/images/profile.png"
                alt="profile-image"
                width={["20rem", "30rem", "20rem"]}
                height={["20rem", "30rem", "20rem"]}
                // marginBottom={["1rem", "1rem", null]}
              />

              <Box textAlign="justify">
                <Heading size="xl" mb={3}>
                {t('hey')}
                </Heading>
                <br />
                <Text>
                {t('aboutDescription1')}
                </Text>
                <br />
                <Text>
                {t('aboutDescription2')}
                </Text>
                <Text>
                {t('aboutDescription3')}
                  <br />
                </Text>
              </Box>
            </SimpleGrid>
          </RevealWrapper>

          <RevealWrapper className="load-hidden" delay={600}>
          <Heading className="sub-heading" size="md" my={3} >
          {t('education')}
          </Heading>
            <SimpleGrid>
              {education.map((data, index) => {
                return <Education {...{ data }} key={index} />;
              })}
            </SimpleGrid>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" id="interests" delay={600}>
            <Heading className="sub-heading" size="md" my={3}>
            {t('interests')}
            </Heading>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
            >
              {interestsData.map((data, index) => {
                return (
                  <InterestsCard
                    interest={t(data.interest)}
                    icon={data.icon}
                    key={index}
                  />
                );
              })}
            </SimpleGrid>
          </RevealWrapper>

        </Box>
      </Center>
    </>
  );
};

export default Page;
