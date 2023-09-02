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
  useToast,
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import RadioCard from "../../components/RadioCards";
import { initialFormData } from "../../utils/constants";

const ContactForm = () => {
  const options = ["Web Development", "Hiring", "Freelance", "Other"];
  const [interestedIn, setInterestedIn] = useState();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "interested",
    defaultValue: "Web Development",
    onChange: (value) => setInterestedIn(value),
  });

  const group = getRootProps();

  const toast = useToast();

  const [formData, setFormData] = useState(initialFormData);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formSubmitURL = "https://formsubmit.co/vaheedsk36@gmail.com"; // Replace with your actual FormSubmit.co form URL

    const data = {
      name: formData.name.label,
      interest: interestedIn,
      email: formData.email.label,
      number: formData.number.label,
      message: formData.message.label,
    };

    try {
      const response = await fetch(formSubmitURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully",
          position: "top",
          isClosable: true,
          variant: "subtle",
        });
      } else {
        throw new Error("Unable to send message ");
      }
    } catch (error) {
      toast({
        title: error.message,
        position: "top",
        isClosable: true,
        variant: "subtle",
      });
    }
  };

  return (
    <>
      <Card className="contact-form-card">
        <CardBody>
          <Heading size="md" color="black" my={3}>
            I&apos;m interested in...
          </Heading>
          <HStack {...group} className="radio-btn-stack">
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
              className="contact-input"
              placeholder="Your Name"
              value={formData.name.label}
              onChange={(e) => handleInputChange(e, "name")}
            />
            <ErrorMsgComponent data="name" />
          </FormControl>

          <FormControl isRequired isInvalid={formData.email.isError}>
            <FormLabel htmlFor="email">Enter Email</FormLabel>
            <Input
              id="email"
              className="contact-input"
              type="email"
              placeholder="Your Email"
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
              <NumberInputField
                className="contact-input"
                placeholder="Your Phone No."
              />
            </NumberInput>
          </FormControl>

          <FormControl isRequired isInvalid={formData.message.isError}>
            <FormLabel htmlFor="message">Enter Message</FormLabel>
            <Textarea
              id="message"
              className="contact-input"
              placeholder="Your Message"
              value={formData.message.label}
              onChange={(e) => handleInputChange(e, "message")}
            />
            <ErrorMsgComponent data="message" />
          </FormControl>

          <Button backgroundColor="#D53F8C" my={3} onClick={handleSubmit}>
            <Icon mr={1} as={BsFillSendFill} />
            Send Message
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ContactForm;
