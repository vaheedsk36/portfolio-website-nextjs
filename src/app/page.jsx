"use client";
import { useEffect, useState, useRef } from "react";
import { Heading, Flex, Center } from "@chakra-ui/react";
import NET from "vanta/dist/vanta.net.min";
import Typed from "typed.js";
import SocialIcons from "../components/SocialIcons";
import * as THREE from "three";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Coder", "Tech Blogger"],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    // if (!vantaEffect) {
    //   setVantaEffect(
    //     NET({
    //       el: vantaRef.current,
    //       THREE: THREE,
    //       mouseControls: true,
    //       touchControls: true,
    //       gyroControls: false,
    //       minHeight: 200.0,
    //       minWidth: 200.0,
    //       scale: 1.0,
    //       scaleMobile: 1.0,
    //     })
    //   );
    // }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      typed.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* <Center ref={vantaRef} height="100vh"> */}
      <Center height="100vh">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
        >
            <Heading size="lg" color="blueTheme.navLinkActive">Hi, my name is</Heading>

          <Flex
            alignItems="center"
            my="3rem"
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
