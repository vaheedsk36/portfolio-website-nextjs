"use client";
import React,{useEffect} from "react";
import ContactForm from "./ContactForm";
import { Heading, Icon, Stack, Text, Tooltip,useDisclosure,Center,SimpleGrid } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Link } from "@chakra-ui/next-js";
import SocialIcons from "../../components/SocialIcons";
import MapBox from "./MapBox";
import { RevealWrapper } from 'next-reveal'
import { PhoneIcon } from "@chakra-ui/icons";

import './../../i18n';
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [t, i18n ] = useTranslation();

  return (
    <Center>
      <SimpleGrid my={["5rem","4rem"]} templateColumns={[null,null,"40% 55%"]}>
        <RevealWrapper className="load-hidden" delay={300}>
            <Heading fontSize="2.5rem" margin="5px">
              {t('contactTitle1')}{" "}
              <Text color="social.instagram" display="inline">
                cool
              </Text>{" "}
              {t('contactTitle2')}
            </Heading>

            <Stack marginTop="4rem">
              <Tooltip label={t('emailMsg')}>
                <Link
                  href="mailto:Boussemoussetaoufik@gmail.com"
                  target="_blank"
                  className="contact-text-span"
                  my={3}
                  _hover={{ textDecoration: "none" }}
                >
                  <Icon as={IoIosMail} mx={2} />
                  <Text fontSize="1.2rem">Boussemoussetaoufik@gmail.com</Text>
                </Link>
              </Tooltip>
              <Tooltip label={t('phone')}>
              <Text className="contact-text-span">
                    <Icon as={PhoneIcon} mx={2} />
                    <Text fontSize="1.2rem">(579)-372-5166</Text>
                  </Text>
              </Tooltip>

              <Tooltip label={t('localization')}>
                  <Text className="contact-text-span" my={3} >
                    <Icon as={ImLocation} mx={2} />
                    <Text fontSize="1.2rem"> {t('adresse')}</Text>
                  </Text>
              </Tooltip>
            </Stack>
            <SocialIcons />

        </RevealWrapper>
        <ContactForm />
      </SimpleGrid>
      <MapBox {...{isOpen, onOpen, onClose }}/>
    </Center>
  );
};

export default Contact;
