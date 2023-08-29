"use client";
import React from "react";
import WorkCard from "./WorkCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { workData } from "../../utils/constants";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <Heading className="sub-heading" size="md" my={3}>
          EXPERIENCE
        </Heading>

        <SimpleGrid>
          {workData.map((data, index) => {
            return <WorkCard {...{ data }} key={index} />;
          })}
        </SimpleGrid>
      </div>
    </>
  );
};

export default Work;
