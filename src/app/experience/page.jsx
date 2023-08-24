"use client";
import React from "react";
import WorkCard from "./WorkCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const Work = () => {
  const workData = [
    {
      company: "1Digitalstack.ai",
      designation: "Software Engineer 1",
      companyImg: "1ds.jpg",
      description: "",
    },
    {
      company: "Fact.MR",
      designation: "Associate Consultant Level 01",
      companyImg: "1ds.jpg",
      description: "",
    },
  ];
  return (
    <>
      <div className="container">
        <Heading className="sub-heading" size="md" my={3} color="white">
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
