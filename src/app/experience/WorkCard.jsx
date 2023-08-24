"use client";
import React from "react";
import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";

const WorkCard = (props) => {
  const { company, designation, companyImg, description } = props.data;
  return (
    <>
      <Card width="65rem" my={3}>
        <CardBody className="work-card-body">
          <Image
            objectFit="cover"
            src={`/images/${companyImg}`}
            alt="Company Logo"
          />
          <div>
            <Heading size="md" my={3}>
              {company}
            </Heading>
            <Text size="md" my={3}>
              {designation}
            </Text>
            <Text size="md" my={3}>
              {description}
            </Text>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default WorkCard;
