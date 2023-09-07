"use client"
import React from "react";
import { Card, Heading, Icon } from "@chakra-ui/react";

const InterestsCard = ({ interest, icon }) => {
  
  return (
    <Card
      display="grid"
      gridTemplateColumns="30% 70%"
      alignItems="center"
      width={["80vw","80vw","17.5rem"]}
      height="5rem"
      borderRadius="0"
      backgroundColor="blueTheme.card"
      fontSize="2.5rem"
      padding="16px"
      cursor="pointer"
      transition="background-color .3s ease-in-out"
      boxShadow="0 10px 30px -15px blueTheme.navShadow"
      _hover={{
        backgroundColor: "blueTheme.cardHover",
      }}
    >
      <Icon as={icon} />
      <Heading size="md">{interest}</Heading>
    </Card>
  );
};

export default InterestsCard;