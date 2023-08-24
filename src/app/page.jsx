"use client";
import { useEffect, useState, useRef } from "react";
import HeaderTab from "../components/HeaderTab";
import { Heading } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import NET from "vanta/dist/vanta.net.min";
import Typed from "typed.js";
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
        <div
          style={{
            position: "absolute",
            top: "18rem",
            left: "10rem",
          }}
        >
          <Heading fontFamily="Black Ops One" fontSize="6xl">
            Masood Akhtar Vaheed
          </Heading>
          <Heading my={3} size="lg" >
            I &apos;m <span ref={typedTextRef}></span>
          </Heading>
          <HeaderTab />
          <div
            style={{
              fontSize: "2rem",
              marginTop: "1.5rem",
            }}
          >
            <Icon as={FaGithub}  />
            <Icon as={FaInstagram} mx={3}  />
            <Icon as={FaLinkedin}  />
            <Icon as={FaTwitter} mx={3}  />
          </div>
        </div>
      </div>
    </>
  );
}
