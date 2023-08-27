"use client";
import React from "react";
import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";

const WorkCard = (props) => {
  const { company, duration, designation, companyImg, description } =
    props.data;
  return (
    <>
      <Card className="work-card-container" my={3}>
        <CardBody className="work-card-body">
          <div className="work-img-container">
            <Image
              objectFit="cover"
              src={`/images/${companyImg}`}
              alt="Company Logo"
            />
          </div>
          <div>
            <Heading fontSize="1.5rem">{company}</Heading>
            <Heading size="sm" my={2}>
              {duration}
            </Heading>
            <Text size="xs" my={2} fontStyle="italic">
              {designation}
            </Text>
            <div
              style={{
                marginLeft: "1.5rem",
                fontSize: "0.95rem",
              }}
            >
              {description}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default WorkCard;
