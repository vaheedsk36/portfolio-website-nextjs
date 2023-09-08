"use client";
import { useEffect, useRef, useCallback } from "react";
import { Heading, Flex, Center, Image } from "@chakra-ui/react";
import Typed from "typed.js";
import SocialIcons from "../components/SocialIcons";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../particlesjs.json";

export default function Home() {
  const typedTextRef = useRef(null);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Coder", "Tech Blogger"],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Center>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleConfig}
          position="absolute"
          zIndex={0}
        />
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          position="absolute"
          top="45vh"
          zIndex={1}
        >
            <Image
                objectFit="shrink"
                src="/images/ar-profile-transformed.png"
                alt="profile-image"
                width="15rem"
                height="15rem"
                marginBottom={["1rem", "1rem", null]}
                backgroundColor="blueTheme.navBg"
                borderRadius="30rem"
              />
          <Heading size="lg" color="blueTheme.navLinkActive">
            Hi, my name is
          </Heading>

          <Flex
            alignItems="center"
            my="1rem"
            flexDirection={["column", "column", "row"]}
          >
            <Heading fontFamily="Black Ops One" fontSize={["2.5rem", "3.7rem"]}>
              Masood Akhtar
            </Heading>

            <Heading
              fontFamily="Black Ops One"
              fontSize={["2.5rem", "3.7rem"]}
              ml={[null, "1rem"]}
            >
              Vaheed
            </Heading>
          </Flex>
          <Heading my={3} size="lg">
            I &apos;m <span className="typed-text" ref={typedTextRef}></span>
          </Heading>
          <SocialIcons />
        </Flex>
      </Center>
    </>
  );
}
