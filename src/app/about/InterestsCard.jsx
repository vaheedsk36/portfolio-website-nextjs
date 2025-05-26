"use client"
import React from "react";
import { Card, Heading, Icon, Box, useColorModeValue } from "@chakra-ui/react";

const InterestsCard = ({ interest, icon }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const iconColor = useColorModeValue("blue.500", "blue.300");
  
  return (
    <Card
      display="flex"
      flexDirection="row"
      alignItems="center"
      width="100%"
      height="5rem"
      borderRadius="md"
      backgroundColor={cardBg}
      padding="1.25rem"
      cursor="pointer"
      transition="all 0.2s ease"
      border="1px solid"
      borderColor={borderColor}
      _hover={{
        borderColor: iconColor,
        transform: "translateY(-2px)",
        "& .icon-wrapper": {
          color: iconColor
        }
      }}
    >
      <Box
        className="icon-wrapper"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="2.5rem"
        height="2.5rem"
        marginRight="1.25rem"
        transition="color 0.2s ease"
      >
        <Icon as={icon} boxSize="1.75rem" />
      </Box>
      <Heading 
        size="md" 
        fontWeight="medium"
        lineHeight="1"
      >
        {interest}
      </Heading>
    </Card>
  );
};

export default InterestsCard;