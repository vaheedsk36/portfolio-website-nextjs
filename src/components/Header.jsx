"use client";
import React from "react";
import HeaderTab from "./HeaderTab";
import { Text,Icon } from "@chakra-ui/react";
import {
  GiHamburgerMenu,
} from "react-icons/gi";
const Header = () => {

  const headerClickhandler = ()=>{
    document.body.classList.toggle('scroll-lock');
  }
  return (
    <>
      <div className="nav-container">
        <div>
        <Text fontFamily="manlope" >VaheedSk36 </Text>
        <Icon as={GiHamburgerMenu} onClick={headerClickhandler}  />
        </div>

        <HeaderTab />
        <span className="nav-link-span"></span>
      </div>
    </>
  );
};

export default Header;
