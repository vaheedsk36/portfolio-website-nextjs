import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Text, Icon } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import HeaderTab from "./HeaderTab";

const Header = () => {
  const [doScrollLockExists, setDoScrollLockExists] = useState(false);
  const pathname = usePathname();

  const toggleScrollLock = () => {
    const newScrollLockExists = !doScrollLockExists;
    document.body.classList.toggle("scroll-lock", newScrollLockExists);

    const navLinkSpans = document.querySelectorAll(".nav-link-span");
    navLinkSpans.forEach((span) => {
      span.style.display = newScrollLockExists ? "block" : "none";
    });

    setDoScrollLockExists(newScrollLockExists);
  };

  useEffect(() => {
    const navLinkSpans = document.querySelectorAll(".nav-link-span");
    if (document.body.classList.contains("scroll-lock")) {
      navLinkSpans.forEach((span) => {
        span.style.display = "none";
      });
      setDoScrollLockExists(false);
      document.body.classList.remove("scroll-lock");
    }
  }, [pathname]);

  return (
    <div className="nav-container">
      <div className="nav-name-container">
        <Text fontFamily="Righteous">VAHEED SHAIK </Text>
        <Icon
          className="hamburger-icon"
          as={doScrollLockExists ? AiOutlineClose : GiHamburgerMenu}
          onClick={toggleScrollLock}
        />
      </div>

      <HeaderTab />
      <span className="nav-link-span"></span>
    </div>
  );
};

export default Header;
