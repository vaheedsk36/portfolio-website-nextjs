import React from "react";
import { socialMediaLinks } from "../utils/constants";
import { Flex } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const SocialIcons = () => {
  return (
    <Flex
      margin="1.5rem 0"
      display="flex"
      alignItems="center"
      justifyContent={["center","left","left"]}
    >
      {socialMediaLinks.map((linkData, index) => (
        <Link
          key={index}
          href={linkData.href}
          target="_blank"
          rel="noopener noreferrer"
          _hover={{
            textDecoration: "none",
            backgroundColor: linkData.hoverColor,
          }}
          backgroundColor={linkData.backgroundColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
          my={3}
          mr={3}
          fontSize={["1.5rem", "2rem", "2rem"]}
          padding="10px"
          borderRadius="1rem"
        >
          <Icon as={linkData.icon} />
        </Link>
      ))}
    </Flex>
  );
};

export default SocialIcons;
