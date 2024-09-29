import { Flex, HStack, chakra } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import './../i18n';
import MobileHeader from "./MobileHeader";
import { links } from "../utils/constants";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';
import {
  Icon,
  Heading
} from "@chakra-ui/react";
import { TbMessageLanguage } from "react-icons/tb";

export default function Header() {
  const pathname = usePathname();
  const [t, i18n ] = useTranslation();
  return (
    <chakra.header
      id="header"
      backgroundColor="blueTheme.navBg"
      pos="sticky"
      top={0}
      zIndex="100"
      boxShadow="0 10px 30px -10px blueTheme.navShadow"

    >
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Link
          href="/"
          fontFamily="Righteous"
          fontSize="lg"
          _hover={{ textDecoration: "none", color:"blueTheme.navLinkActive",transition:"all .5s ease-in-out" }}
        >
        TAOUFIK BOUSSEMOUSSE {"</>"} {" "}
        </Link>


      </Flex>
    </chakra.header>
  );
}
