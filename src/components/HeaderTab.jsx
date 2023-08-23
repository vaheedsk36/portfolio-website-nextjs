"use client";
import React from "react";
import { Link } from "@chakra-ui/next-js";

const HeaderTab = () => {
  return (
    <>
      <span className="nav-link-span">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact">Contact</Link>
      </span>
    </>
  );
};

export default HeaderTab;
