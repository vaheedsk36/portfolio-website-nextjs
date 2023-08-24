"use client"
import React from "react";
import {
  Card,
  Heading,
  Icon
} from "@chakra-ui/react";

const InterestsCard = ({interest,icon}) => {
  return (
    <>
      <Card className="interests-card">
      <Icon as={icon} />
          <Heading size="md">
            {interest}
          </Heading>
      </Card>
    </>
  );
};

export default InterestsCard;
