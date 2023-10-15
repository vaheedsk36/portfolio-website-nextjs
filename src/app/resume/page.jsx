"use client";
import React from "react";
import {
    Center,
    Box
  } from "@chakra-ui/react";

const Resume = () => {
  return (
    <>
    <Center>
      <Box width={["90vw", "90vw", "80vw"]} height="100%" marginBottom="4rem">

      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "141.4286%",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform"
        }}
      >
        <iframe
          title="Resume"
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0
          }}
          src="https://www.canva.com/design/DAE02jCrTBo/view?embed"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAE02jCrTBo/view?utm_content=DAE02jCrTBo&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV_Masood Akhtar Vaheed
      </a>{" "}
      by Masood Akhtar Vaheed

      </Box>
      </Center>
    </>
  );
};

export default Resume;