"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { Heading, Icon, Stack, HStack, Text } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-container">
        <div>
          <Heading fontSize="2.8rem">
            Let&apos;s discuss on something{" "}
            <span
              style={{
                color: "#D53F8C",
              }}
            >
              cool
            </span>{" "}
            together
          </Heading>

          <Stack marginTop="4rem">
            <Text className="contact-text-span" my={3}>
              <Icon as={IoIosMail} mx={2} />
              <span>vaheedsk36@gmail.com</span>
            </Text>
            <Text className="contact-text-span" my={3}>
              <Icon as={ImLocation} mx={2} />
              <span>Hyderabad, India</span>
            </Text>
          </Stack>
          <HStack mx={3} className="social-container">
            <Icon as={FaInstagram} className="instagram" />
            <Icon as={FaLinkedin} mx={5} className="linkedin" />
            <Icon as={FaTwitter} className="twitter" />
          </HStack>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
