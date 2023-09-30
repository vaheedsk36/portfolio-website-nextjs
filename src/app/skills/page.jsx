"use client";
import React,{useEffect} from "react";
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import { skillsDevelopment,skillsDatabase,versionControlSystems,TaskManagementTools,ides } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";



const Skills = () => {

  return (
    <Center height="70vh" >
      <Box width="80vw" height="100%">
        <Heading className="sub-heading" size="md" my={3}>
        TECHNICAL SKILLS
        </Heading>

        <RevealWrapper className="" delay={300}>
        <Heading style={{textDecoration:"underline", marginLeft: "1.5rem"}} color="blueTheme.navLinkActive" size="m" my={3}>
          DEVELOPEMENT
        </Heading>
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(135px, 1fr))"
          paddingBottom="1rem"
          paddingTop="1rem"

        >
          {skillsDevelopment.map((data, index) => {
            return (
              <Card
                key={index}
                backgroundColor="blueTheme.card"
                transition="all .2s ease-in-out"
                _hover={{
                cursor: "pointer",
                backgroundColor: "blueTheme.cardHover",
                transform:"scale(1.05)"
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center" >
                  <Icon as={data.icon} width="55px" height="55px" />
                  <Heading my={1} textAlign="center" fontSize= "1.2rem">
                    {data.name}
                  </Heading>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
        <Heading style={{textDecoration:"underline", marginLeft: "1.5rem"}} color="blueTheme.navLinkActive" size="m" my={3}>
          DEVELOPEMENT TOOLS - DATABASES
        </Heading>
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(135px, 1fr))"
          paddingBottom="1rem"
          paddingTop="1rem"

        >
          {skillsDatabase.map((data, index) => {
            return (
              <Card
                key={index}
                backgroundColor="blueTheme.card"
                transition="all .2s ease-in-out"
                _hover={{
                cursor: "pointer",
                backgroundColor: "blueTheme.cardHover",
                transform:"scale(1.05)"
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center" >
                  <Icon as={data.icon} width="55px" height="55px" />
                  <Heading my={1} textAlign="center" fontSize= "1.2rem">
                    {data.name}
                  </Heading>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
        <Heading style={{textDecoration:"underline", marginLeft: "1.5rem"}} color="blueTheme.navLinkActive" size="m" my={3}>
          VERSION CONTROL SYSTEMS
        </Heading>
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(135px, 1fr))"
          paddingBottom="1rem"
          paddingTop="1rem"

        >
          {versionControlSystems.map((data, index) => {
            return (
              <Card
                key={index}
                backgroundColor="blueTheme.card"
                transition="all .2s ease-in-out"
                _hover={{
                cursor: "pointer",
                backgroundColor: "blueTheme.cardHover",
                transform:"scale(1.05)"
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center" >
                  <Icon as={data.icon} width="55px" height="55px" />
                  <Heading my={1} textAlign="center" fontSize= "1.2rem">
                    {data.name}
                  </Heading>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
        <Heading style={{textDecoration:"underline", marginLeft: "1.5rem"}} color="blueTheme.navLinkActive" size="m" my={3}>
          IDE
        </Heading>
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(185px, 1fr))"
          paddingBottom="1rem"
          paddingTop="1rem"
        >
          {ides.map((data, index) => {
            return (
              <Card
                key={index}
                backgroundColor="blueTheme.card"
                transition="all .2s ease-in-out"
                _hover={{
                cursor: "pointer",
                backgroundColor: "blueTheme.cardHover",
                transform:"scale(1.05)"
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center" >
                  <Icon as={data.icon} width="55px" height="55px" />
                  <Heading my={1} textAlign="center" fontSize= "1rem">
                    {data.name}
                  </Heading>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>

        <Heading style={{textDecoration:"underline", marginLeft: "1.5rem"}} color="blueTheme.navLinkActive" size="m" my={3}>
          TASK MANAGEMENT TOOLS - EXTRENAL TOOLS
        </Heading>
        <SimpleGrid
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(135px, 1fr))"
          paddingBottom="2rem"
          paddingTop="1rem"
        >
          {TaskManagementTools.map((data, index) => {
            return (
              <Card
                key={index}
                backgroundColor="blueTheme.card"
                transition="all .2s ease-in-out"
                _hover={{
                cursor: "pointer",
                backgroundColor: "blueTheme.cardHover",
                transform:"scale(1.05)"
                }}
              >
                <CardBody display="flow" alignItems="center" textAlign="center" >
                  <Icon as={data.icon} width="55px" height="55px" />
                  <Heading my={1} textAlign="center" fontSize= "1.2rem">
                    {data.name}
                  </Heading>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>


        <Heading className="sub-heading" size="md" my={3}>
         SOFT SKILLS
        </Heading>
        <ul   style={{listStyle: "none",}}>
          <li>
            <div style={{margin: "1rem",fontSize: "0.95rem",}}>
                <Heading fontSize="1.1rem"> - Collaboration, self-directed learning, and intrinsic motivation. </Heading>
            </div>
          </li>
          <li>
            <div style={{margin: "1rem",fontSize: "0.95rem",}}>
                <Heading fontSize="1.1rem"> - Problem-solving and analytical skills. </Heading>
            </div>
          </li>
          <li>
            <div style={{margin: "1rem",fontSize: "0.95rem",}}>
                <Heading fontSize="1.1rem"> - Effective communication and flexibility. </Heading>
            </div>
          </li>
          <li>
            <div style={{margin: "1rem",fontSize: "0.95rem",}}>
                <Heading fontSize="1.1rem"> - Patience and hard working. </Heading>
            </div>
          </li>
        </ul>
        </RevealWrapper>

      </Box>
    </Center>

  );
};

export default Skills;
