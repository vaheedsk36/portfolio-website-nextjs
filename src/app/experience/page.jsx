"use client";
import React from "react";
import WorkCard from "./WorkCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const Work = () => {
  const workData = [
    {
      company: "1Digitalstack.ai",
      designation: "Software Engineer 1",
      duration: "March 2022 - Present",
      companyImg: "1ds.jpg",
      description: (
        <>
          <ul>
            <li>
              I work on Reviniti, an analytics product designed for e-commerce
              players in the bid management domain. Solely migrated the old
              codebase from a templating engine (PugJS) to React with
              TypeScript.
            </li>
            <li>
              Engaged in developing new features, refactoring code, enhancing
              product performance, bug fixes and contributing towards achieving
              high scalability for the product.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Fact.MR",
      designation: "Associate Consultant Level 01",
      duration: "Dec 2020 - July 2021",
      companyImg: "fmr.svg",
      description: (
        <>
          <ul>
            <li>
              Engaged in creating comprehensive client-specific and syndicated
              research reports, along with SEO-focused articles and collateral
              materials within the domains of chemicals, materials, consumer
              goods, and industrial goods.
            </li>
            <li>
              Expertly estimated market valuations and conducted primary
              research in collaboration with industry experts to validate data,
              extract valuable market insights.
            </li>
          </ul>
        </>
      ),
    },
  ];
  return (
    <>
      <div
        className="work-container"
      >
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
