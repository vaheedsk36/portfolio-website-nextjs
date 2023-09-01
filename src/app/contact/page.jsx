"use client";
import React,{useState} from "react";
import ContactForm from "./ContactForm";
import { Heading, Icon, Stack, Text, Tooltip,useDisclosure } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Link } from "@chakra-ui/next-js";
import SocialIcons from "../../components/SocialIcons";
import MapBox from "./MapBox";

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
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
            <Tooltip label="Send Mail">
              <Link
                href="mailto:vaheedsk36@gmail.com"
                target="_blank"
                className="contact-text-span"
                my={3}
                _hover={{ textDecoration: "none" }}
              >
                <Icon as={IoIosMail} mx={2} />
                <Text>vaheedsk36@gmail.com</Text>
              </Link>
            </Tooltip>

                <Text className="contact-text-span" my={3} onClick={onOpen}>
                  <Icon as={ImLocation} mx={2} />
                  <span>Hyderabad, India</span>
                </Text>
          </Stack>
          <SocialIcons />
        </div>

        <ContactForm />
      </div>
      <MapBox {...{isOpen, onOpen, onClose }}/>
    </div>
  );
};

export default Contact;
