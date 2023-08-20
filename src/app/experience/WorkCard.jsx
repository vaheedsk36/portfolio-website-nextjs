"use client";
import React from "react";
import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";

const WorkCard = (props) => {
  const { company, designation, companyImg, description } = props.data;
  return (
    <>
      <Card>
        <CardBody>
          <Image
            objectFit="cover"
            src={`/images/${companyImg}`}
            alt="Company Logo"
          />
          <Heading size="md" my={3}>
            {company}
          </Heading>
          <Text size="md" my={3}>
            {designation}
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default WorkCard;
