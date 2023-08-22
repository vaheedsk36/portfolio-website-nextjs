"use client";
import React from "react";
import HeaderTab from "./HeaderTab";
import { Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <>
      <div className="nav-container">
        <Text fontFamily="manlope" color="white">VaheedSk36</Text>
        <HeaderTab />
        <span className="nav-link-span"></span>
      </div>
    </>
  );
};

export default Header;
