"use client";
import React, { useState } from "react";
import HeaderTab from "./HeaderTab";
import { Text, Icon } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const headerClickhandler = () => {
    document.body.classList.toggle("scroll-lock");

    const navLinkSpans = document.querySelectorAll(".nav-link-span");
    navLinkSpans.forEach((span) => {
      if (document.body.classList.contains("scroll-lock")) {
        span.style.display = "block";
      } else {
        span.style.display = "none";
      }
    });

    setDoScrollLockExists(
      document.getElementsByClassName("scroll-lock").length
    );
  };

  const [doScrollLockExists, setDoScrollLockExists] = useState();
  return (
    <>
      <div className="nav-container">
        <div className="nav-name-container">
          <Text fontFamily="righteous">VAHEED SHAIK </Text>
          <Icon
            className="hamburger-icon"
            as={doScrollLockExists ? AiOutlineClose : GiHamburgerMenu}
            onClick={headerClickhandler}
          />
        </div>

        <HeaderTab />
        <span className="nav-link-span"></span>
      </div>
    </>
  );
};

export default Header;
