"use client";
import HeaderTab from "../components/HeaderTab";
import { Heading, Text } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <div className="home-container body-theme">
        <div
          style={{
            position: "absolute",
            top: "18rem",
            left: "10rem",
          }}
        >
          <Heading color="white">
            Masood Akhtar Vaheed
          </Heading>
          <Heading my={3} size="lg" color="white">
            I m Software Developer
          </Heading>
          <HeaderTab />
          <div style={{
            fontSize:'2rem',
            marginTop:'1.5rem'
          }}>
          <Icon as={FaGithub}   color="white" />
          <Icon as={FaInstagram} mx={2} color="white" />
          <Icon as={FaLinkedin}  color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
