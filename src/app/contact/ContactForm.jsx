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
  Stack,
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import RadioCard from "../../components/RadioCards";
import { initialFormData } from "../../utils/constants";
import { useForm } from "react-hook-form";
import ShowToast from "../../components/ShowToast";

const ContactForm = () => {
  const options = ["Web Development", "Hiring", "Freelance", "Other"];
  const [interestedIn, setInterestedIn] = useState();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "interested",
    defaultValue: "Web Development",
    onChange: (value) => setInterestedIn(value),
  });

  const group = getRootProps();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const formSubmitURL = "https://formsubmit.co/vaheedsk36@gmail.com"; 
    try {
      const response = await fetch(formSubmitURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...formData,interestedIn}),
      });

      if (response.ok) {
        ShowToast({
          title: "Message sent successfully",
          status: "success",
        });
      } else {
        throw new Error("Unable to send message ");
      }
    } catch (error) {
      ShowToast({
        title: error.message,
        status: "error",
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
          <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
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
            <FormControl isRequired isInvalid={errors.name} my={4}>
              <FormLabel htmlFor="name">Enter Name</FormLabel>
              <Input
                id="name"
                className="contact-input"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <FormErrorMessage>Enter your name</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={errors.email}>
              <FormLabel htmlFor="email">Enter Email</FormLabel>
              <Input
                id="email"
                className="contact-input"
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <FormErrorMessage>Enter your email</FormErrorMessage>
              )}
            </FormControl>
            <FormControl my={4}>
              <FormLabel htmlFor="number">Enter Phone No.</FormLabel>
              <NumberInput id="number" {...register("number")}>
                <NumberInputField
                  className="contact-input"
                  placeholder="Your Phone No."
                />
              </NumberInput>
            </FormControl>
            <FormControl isRequired isInvalid={errors.message}>
              <FormLabel htmlFor="message">Enter Message</FormLabel>
              <Textarea
                id="message"
                className="contact-input"
                placeholder="Your Message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <FormErrorMessage>Enter your message</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <Button
                backgroundColor="#D53F8C"
                my={3}
                _hover={{ backgroundColor: "#D53F8C" }}
                type="submit"
              >
                <Icon mr={1} as={BsFillSendFill} />
                Send Message
              </Button>
            </FormControl>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default ContactForm;
