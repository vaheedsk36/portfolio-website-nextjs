"use client";
import React from "react";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";

const HeaderTab = () => {
  const links = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Skills", path: "/skills" },
    { text: "Projects", path: "/projects" },
    { text: "Experience", path: "/experience" },
    { text: "Blogs", path: "/blogs" },
    { text: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <>
      <span className="nav-link-span">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={pathname === link.path ? "active-link" : ""}

          >
            {link.text}
          </Link>
        ))}
      </span>
    </>
  );
};

export default HeaderTab;
