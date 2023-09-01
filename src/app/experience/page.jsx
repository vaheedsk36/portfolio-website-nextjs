"use client";
import React from "react";
import WorkCard from "./WorkCard";
import { Heading, SimpleGrid, Center, Box } from "@chakra-ui/react";
import { workData } from "../../utils/constants";

const Work = () => {
  return (
    <>
      <Center>
        <Box width={["80vw","80vw","79vw"]} height="100%">
          <Heading className="sub-heading" size="md" my={3}>
            EXPERIENCE
          </Heading>

          <SimpleGrid>
            {workData.map((data, index) => {
              return <WorkCard {...{ data }} key={index} />;
            })}
          </SimpleGrid>
        </Box>
      </Center>
    </>
  );
};

export default Work;