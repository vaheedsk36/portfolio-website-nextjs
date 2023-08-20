"use client";
import React from "react";
import WorkCard from "./WorkCard";
import { Heading } from "@chakra-ui/react";

const Work = () => {
  const workData = [
    {
      company: "1Digitalstack.ai",
      designation: "Software Engineer 1",
      companyImg: "1ds.jpg",
      description: "",
    },
  ];
  return (
    <>
      <Heading size="lg" textAlign="center" my={3} color="white">
        Professional Experience
      </Heading>

      <div className="work-card-container">
        {workData.map((data, index) => {
          return <WorkCard {...{ data }} key={index} />;
        })}
      </div>
    </>
  );
};

export default Work;
