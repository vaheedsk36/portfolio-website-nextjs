"use client";
import React from "react";
import WorkCard from "./WorkCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const Work = () => {
  const workData = [
    {
      company: "1Digitalstack.ai",
      designation: "Software Engineer 1",
      duration:"March 2022 - Present",
      companyImg: "1ds.jpg",
      description: "",
    },
    {
      company: "Fact.MR",
      designation: "Associate Consultant Level 01",
      duration:"Dec 2020 - July 2021",
      companyImg: "fmr.svg",
      description: "",
    },
  ];
  return (
    <>
      <div className="container" style={{
        margin:'auto 7.2rem'
      }}>
        <Heading className="sub-heading" size="md" my={3} >
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
