"use client";
import React, { useEffect } from "react";
import WorkCard from "./WorkCard";
import { Heading, SimpleGrid, Center, Box } from "@chakra-ui/react";
import { workData } from "../../utils/constants";
import ScrollReveal from "scrollreveal";

const Work = () => {
  useEffect(() => {
    ScrollReveal().reveal(".work-body", { delay: 300 });
  }, []);

  return (
    <>
      <Center>
        <Box width={["80vw", "80vw", "79vw"]} height="100%">
          <Heading className="sub-heading" size="md" my={3}>
            EXPERIENCE
          </Heading>

          <SimpleGrid className="work-body">
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
