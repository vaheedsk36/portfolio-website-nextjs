"use client";
import React from "react";
import { Link } from "@chakra-ui/next-js";

const Header = () => {
  return (
    <>
    <div className="nav-container"> 
    <span>VaheedSk36</span>
    <span className="nav-link-span">
        <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
            About
          </Link>
          <Link href="/skills" color="blue.400" _hover={{ color: "blue.500" }}>
            Skills
          </Link>
          <Link href="/projects" color="blue.400" _hover={{ color: "blue.500" }}>
            Projects
          </Link>
          <Link href="/experience" color="blue.400" _hover={{ color: "blue.500" }}>
            Experience
          </Link>
          <Link href="/blogs" color="blue.400" _hover={{ color: "blue.500" }}>
            Blogs
          </Link>
    </span>

    <span className="nav-contact-span">
      <Link href="/contact" color="blue.400" _hover={{ color: "blue.500" }}>
        Contact
      </Link>
    </span>

    </div>
    </>
  );
};

export default Header;
