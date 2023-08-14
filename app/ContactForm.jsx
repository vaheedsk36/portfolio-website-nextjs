import React, { useState } from "react";
import {
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const ContactForm = () => {
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
      <FormControl isRequired isInvalid={formData.name.isError}>
        <FormLabel htmlFor="name">Enter Name</FormLabel>
        <Input
          id="name"
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
          type="email"
          placeholder="Your Email"
          value={formData.email.label}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <ErrorMsgComponent data="email" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="number">Enter Phone No.</FormLabel>
        <NumberInput
          id="number"
          min={0}
          value={formData.number.label}
          onChange={(valueString) =>
            handleInputChange({ target: { value: valueString } }, "number")
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired isInvalid={formData.message.isError}>
        <FormLabel htmlFor="message">Enter Message</FormLabel>
        <Textarea
          id="message"
          placeholder="Your Message"
          value={formData.message.label}
          onChange={(e) => handleInputChange(e, "message")}
        />
        <ErrorMsgComponent data="message" />
      </FormControl>
    </>
  );
};

export default ContactForm;
