"use client";
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import './../../i18n';
import { useTranslation } from 'react-i18next';

const OtherWorkCard = (props) => {
  const { company, duration, designation, companyImg, zarottiTache1, zarottiTache2, bichaTache1, bichaTache2, bichaTache3, bichaTache4 } =
    props.data;
  const [t, i18n] = useTranslation();

  return (
    <>
      <Card
        my={3}
        transition="all .3s ease-in-out"
        backgroundColor="blueTheme.card"
        _hover={{ transform: "scale(0.99)" }}
        width="80vw"
        boxShadow="0 10px 30px -15px blueTheme.navShadow"
      >
        <CardBody>
          <Flex flexDirection={["column", "column", "row"]} alignItems="center">
            <Image
              objectFit="cover"
              src={`/images/${companyImg}`}
              alt="Company Logo"
              marginRight="1rem"
              height={["15rem", "15rem", "13rem"]}
              width={["15rem", "15rem", "13rem"]}
              margin={["2rem auto", "1rem", "auto 1rem"]}
              backgroundColor="white"
              display={["none", "unset", "unset"]}
            />
            <Box>
              <Heading fontSize="1.5rem">{t(company)}</Heading>
              <Heading size="sm" my={2}>
                {t(duration)}
              </Heading>
              <Text size="xs" my={2} fontStyle="italic">
                {t(designation)}
              </Text>
              <div
                style={{
                  marginLeft: "1.5rem",
                  fontSize: "0.95rem",
                }}
              >
                {company === "zarotti" ? (
                  <ul>
                    <li>{t(zarottiTache1)}</li>
                    <li>{t(zarottiTache2)}</li>
                  </ul>
                ) : (
                  <ul>
                    <li>{t(bichaTache1)}</li>
                    <li>{t(bichaTache2)}</li>
                    <li>{t(bichaTache3)}</li>
                    <li>{t(bichaTache4)}</li>
                  </ul>
                )}
              </div>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default OtherWorkCard;
