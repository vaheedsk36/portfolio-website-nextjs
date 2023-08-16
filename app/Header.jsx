"use client";
import React from 'react';
import { Link } from "@chakra-ui/next-js";

const Header = () => {
  return (
    <>
          <Link href="/contact" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
    </>
  )
}

export default Header