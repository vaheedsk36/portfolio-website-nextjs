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
  Flex,
  Heading,
  Icon,
  Stack
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import RadioCard from "../../components/RadioCards";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { RevealWrapper } from 'next-reveal'

const ContactForm = () => {
  const toast = useToast();
  const options = ["Web Development", "Hiring", "Freelance", "Other"];
  const [interestedIn, setInterestedIn] = useState("Web Development");
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "interested",
    defaultValue: interestedIn,
    onChange: (value) => setInterestedIn(value),
  });
  const group = getRootProps();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    formData["interested-in"] = interestedIn;
    const formSubmitURL = `https://fabform.io/f/${process.env.NEXT_PUBLIC_FAB_FORM_KEY}`;
    try {
      const response = await fetch(formSubmitURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to send message ");
      }

      reset({
        name: "",
        email: "",
        number: "",
        message: "",
      });

      setIsLoading(false);

      toast({
        title: "Message sent successfully",
        status: "success",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: error.message,
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
    <RevealWrapper className="load-hidden" delay={600}>
      <Card className="contact-form-card" borderRadius="2rem" backgroundColor="white" padding="10px 15px">
        <CardBody>
          <Heading size="md" color="black" my={3}>
            I&apos;m interested in...
          </Heading>
          <Flex {...group} wrap="wrap" px={1}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </Flex>
          <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired isInvalid={errors.name} my={4}>
              <FormLabel htmlFor="name">Enter Name</FormLabel>
              <Input
                id="name"
                className="contact-input"
                type="text"
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
                isLoading={isLoading}
                loadingText='Submitting'
                backgroundColor="social.instagram"
                my={3}
                _hover={{ backgroundColor: "social.instagramHover" }}
                type="submit"
              >
                <Icon mr={1} as={BsFillSendFill} />
                Send Message
              </Button>
            </FormControl>
          </Stack>
        </CardBody>
      </Card>
    </RevealWrapper>
    </>
  );
};

export default ContactForm;
