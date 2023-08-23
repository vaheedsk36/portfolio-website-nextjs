"use client";
import React from "react";
import {
  Card,
  CardBody,
  Text,
  Button,
  Image,
  Link,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import { BsGlobe, BsCodeSlash, BsRobot, BsFileBarGraph } from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import InterestsCard from "./InterestsCard";

const Page = () => {
  const interestsData = [
    {
      interest: "Software Engineering",
      icon: BsCodeSlash,
    },
    {
      interest: "Tech Blog",
      icon: FaHashnode,
    },
    {
      interest: "Internet of Things",
      icon: FcElectronics,
    },
    {
      interest: "Market Research",
      icon: GiArchiveResearch,
    },
    {
      interest: "Visualization",
      icon: BsFileBarGraph,
    },
    {
      interest: "Software Development",
      icon: AiFillCode,
    },
    {
      interest: "Robotics",
      icon: BsRobot,
    },
    {
      interest: "Web Scraping",
      icon: BsGlobe,
    },
  ];
  return (
    <>
      {/* <Card>
        <CardBody>
          <Image objectFit="cover" src={coverImage} alt="Chakra UI" />
          <Heading size="md" my={3}>
            {title}
          </Heading>
          <Text>{brief}</Text>
          <Button my={4}>
            <Link href={articleUrl} target="_blank">
              View here
            </Link>
          </Button>
        </CardBody>
      </Card> */}

      <SimpleGrid
        width="80vw"
        p={4}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {interestsData.map((data, index) => {
          return (
            <InterestsCard
              interest={data.interest}
              icon={data.icon}
              key={index}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Page;
