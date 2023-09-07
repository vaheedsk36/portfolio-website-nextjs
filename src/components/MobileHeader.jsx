import { useEffect } from "react";
import { useDisclosure, Flex, Button, VStack } from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";
import { IoMdMenu } from "react-icons/io";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { links } from "../utils/constants";

export default function MobileHeader({ pathname }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>

      <DrawerComponent isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems="left">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              fontWeight="extrabold"
              _hover={{ textDecoration: "none" }}
              fontSize="md"
              my={2}
              textAlign="center"
              color={pathname === link.path ? "blueTheme.navLinkActive" : ""}
            >
              {link.text}
            </Link>
          ))}
        </VStack>
      </DrawerComponent>
    </Flex>
  );
}
