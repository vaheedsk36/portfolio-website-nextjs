"use client";
import { useEffect, useState, useRef } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NET from "vanta/dist/vanta.net.min";
import Typed from "typed.js";
import * as THREE from "three";
import { socialMediaLinks } from "../utils/constants";

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

    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      typed.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div className="home-container body-theme" ref={vantaRef}>
        <div className="about-main-container">
          <Heading fontFamily="Black Ops One" className="name-heading">
            Masood Akhtar Vaheed
          </Heading>
          <Heading my={3} size="lg">
            I &apos;m <span className="typed-text" ref={typedTextRef}></span>
          </Heading>
          <Flex marginTop="1.5rem">
            {socialMediaLinks.map((linkData, index) => (
              <Link
                key={index}
                href={linkData.href}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: "none",backgroundColor:linkData.hoverColor }}
                backgroundColor={linkData.backgroundColor}
                display="flex"
                alignItems="center"
                justifyContent="center"
                my={3}
                mr={3}
                fontSize="2rem"
                padding="10px"
                borderRadius="1rem"
              >
                <Icon as={linkData.icon} />
              </Link>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
}
