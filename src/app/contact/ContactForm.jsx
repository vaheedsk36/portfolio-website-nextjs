"use client";

import React, { useState } from "react";
import {
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Card,
  CardBody,
  useRadioGroup,
  HStack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import RadioCard from "../../components/RadioCards";

const ContactForm = () => {
  const options = ["Web Development", "Hiring", "Freelance", "Other"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "interested",
    defaultValue: "Web Development",
    onChange: console.log,
  });

  const group = getRootProps();

  const [formData, setFormData] = useState({
    name: {
      label: "",
      isError: false,
      errorMsg: "Name is required",
    },
    email: {
      label: "",
      isError: false,
      errorMsg: "Email is required",
    },
    number: {
      label: "",
      isError: false,
      errorMsg: "Number is required",
    },
    message: {
      label: "",
      isError: false,
      errorMsg: "Message is required",
    },
  });

  const handleInputChange = (e, data) => {
    const updatedFormData = { ...formData };
    updatedFormData[data] = {
      ...updatedFormData[data],
      label: e.target.value,
      isError: e.target.value === "",
    };
    setFormData(updatedFormData);
  };

  const ErrorMsgComponent = ({ data }) =>
    formData[data].isError && (
      <FormErrorMessage>{formData[data].errorMsg}</FormErrorMessage>
    );

  return (
    <>
      <Card className="contact-form-card">
        <CardBody>
          <Heading size="md" color="black" my={3}>
            I&apos;m interested in...
          </Heading>
          <HStack {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
          <FormControl isRequired isInvalid={formData.name.isError} my={4}>
            <FormLabel htmlFor="name">Enter Name</FormLabel>
            <Input
              id="name"
              placeholder="Your Name"
              color="black"
              value={formData.name.label}
              onChange={(e) => handleInputChange(e, "name")}
            />
            <ErrorMsgComponent data="name" />
          </FormControl>

          <FormControl isRequired isInvalid={formData.email.isError}>
            <FormLabel htmlFor="email">Enter Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              color="black"
              value={formData.email.label}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <ErrorMsgComponent data="email" />
          </FormControl>

          <FormControl my={4}>
            <FormLabel htmlFor="number">Enter Phone No.</FormLabel>
            <NumberInput
              id="number"
              value={formData.number.label}
              onChange={(valueString) =>
                handleInputChange({ target: { value: valueString } }, "number")
              }
              
            >
              <NumberInputField color="black" placeholder="Your Phone No." />
            </NumberInput>
          </FormControl>

          <FormControl isRequired isInvalid={formData.message.isError}>
            <FormLabel htmlFor="message">Enter Message</FormLabel>
            <Textarea
              id="message"
              placeholder="Your Message"
              value={formData.message.label}
              color="black"
              onChange={(e) => handleInputChange(e, "message")}
            />
            <ErrorMsgComponent data="message" />
          </FormControl>

          <Button colorScheme="pink" my={3}>
            <Icon mr={1} as={BsFillSendFill} />
            Send Message
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ContactForm;
