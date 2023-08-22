"use client";
import { useEffect, useState, useRef } from "react";
import HeaderTab from "../components/HeaderTab";
import { Heading } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import NET from "vanta/dist/vanta.net.min";

import * as THREE from "three";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div className="home-container body-theme" ref={vantaRef}>
        <div
          style={{
            position: "absolute",
            top: "18rem",
            left: "10rem",
          }}
        >
          <Heading color="white">Masood Akhtar Vaheed</Heading>
          <Heading my={3} size="lg" color="white">
            I m Software Developer
          </Heading>
          <HeaderTab />
          <div
            style={{
              fontSize: "2rem",
              marginTop: "1.5rem",
            }}
          >
            <Icon as={FaGithub} color="white" />
            <Icon as={FaInstagram} mx={2} color="white" />
            <Icon as={FaLinkedin} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
