"use client";
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";

const WorkCard = (props) => {
  const { company, duration, designation, companyImg, description } =
    props.data;
  return (
    <>
      <Card my={3} transition="all .3s ease-in-out"
       backgroundColor="blueTheme.card"
        _hover={{transform:"scale(0.99)"}} width= "80vw"
          boxShadow="0 10px 30px -15px blueTheme.navShadow"
        >
        <CardBody>
          <Flex flexDirection={["column","column","row"]} justifyContent="center" alignItems="center">
            <Image
              objectFit="cover"
              src={`/images/${companyImg}`}
              alt="Company Logo"
              marginRight="1rem"
              height={["15rem","15rem","13rem"]}
              width={["15rem","15rem","13rem"]}
              margin={["2rem auto","1rem","auto 1rem"]}
              backgroundColor="white"
              display={["none","unset","unset"]}
            />
            <Box>
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
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default WorkCard;
