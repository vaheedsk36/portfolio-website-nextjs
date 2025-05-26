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
  VStack,
  Divider,
} from "@chakra-ui/react";

const WorkCard = (props) => {
  const { company, companyImg, roles } = props.data;
  const hasMultipleRoles = roles.length > 1;

  return (
    <>
      <Card 
        my={3} 
        transition="all .3s ease-in-out"
        backgroundColor="blueTheme.card"
        _hover={{transform:"scale(0.99)"}} 
        width="80vw"
        boxShadow="0 10px 30px -15px blueTheme.navShadow"
      >
        <CardBody>
          <Flex 
            flexDirection={["column", "column", "row"]} 
            gap={8}
            alignItems="flex-start"
          >
            <Box 
              width={["100%", "100%", "200px"]} 
              display="flex" 
              flexDirection="column" 
              alignItems="center"
              position="relative"
            >
              <Image
                objectFit="contain"
                src={`/images/${companyImg}`}
                alt="Company Logo"
                height={["120px", "120px", "150px"]}
                width={["120px", "120px", "150px"]}
                backgroundColor="white"
                borderRadius="md"
                padding={2}
                boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                marginBottom={4}
              />
              <Heading 
                fontSize="1.5rem" 
                textAlign="center"
                color="blueTheme.primary"
                fontWeight="bold"
              >
                {company}
              </Heading>
            </Box>

            <Box 
              width={["100%", "100%", "calc(100% - 200px)"]}
              borderLeft={["none", "none", "2px solid"]}
              borderColor={["transparent", "transparent", "blueTheme.primary"]}
              paddingLeft={[0, 0, 8]}
            >
              <VStack spacing={8} align="stretch">
                {roles.map((role, index) => (
                  <Box key={index} position="relative">
                    {hasMultipleRoles && index > 0 && (
                      <Divider 
                        orientation="vertical" 
                        position="absolute" 
                        left="1.5rem" 
                        top="-2rem" 
                        height="2rem" 
                        borderColor="blueTheme.primary"
                      />
                    )}
                    <Flex>
                      {hasMultipleRoles && (
                        <Box 
                          width="3rem" 
                          height="3rem" 
                          borderRadius="full" 
                          backgroundColor="blueTheme.primary"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          marginRight="1.5rem"
                          flexShrink={0}
                          boxShadow="0 4px 12px rgba(0,0,0,0.15)"
                        >
                          <Text color="white" fontSize="sm" fontWeight="bold">
                            {index + 1}
                          </Text>
                        </Box>
                      )}
                      <Box>
                        <Heading size="sm" my={2} color="blueTheme.text">
                          {role.duration}
                        </Heading>
                        <Text 
                          size="xs" 
                          my={2} 
                          fontStyle="italic"
                          color="blueTheme.primary"
                          fontWeight="medium"
                        >
                          {role.designation}
                        </Text>
                        <div
                          style={{
                            marginLeft: hasMultipleRoles ? "1.5rem" : "0",
                            fontSize: "0.95rem",
                          }}
                        >
                          {role.description}
                        </div>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </VStack>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default WorkCard;
