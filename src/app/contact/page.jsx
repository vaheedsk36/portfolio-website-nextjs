"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { Heading, Icon, Stack, HStack, Text } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import SocialIcons from "../../components/SocialIcons";

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
          <SocialIcons/>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
