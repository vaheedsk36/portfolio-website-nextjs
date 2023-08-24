"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-container">
        <Heading fontSize="3rem">
          Let&apos;s discuss on something <span style={{
            color:"#D53F8C"
          }}>cool</span> together
        </Heading>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
