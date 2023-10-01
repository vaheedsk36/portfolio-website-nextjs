import React from 'react';
import {
  Card,
  CardBody,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import './../../i18n';
import { useTranslation } from 'react-i18next';

function DownloadButton() {
  const { t, i18n } = useTranslation();

  const handleDownload = () => {
    const cvPath = '/resume.pdf';

    fetch(cvPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading CV:', error);
      });
  };

  return (
    <button onClick={handleDownload}>
      <Card
        backgroundColor="blueTheme.card"
        transition="all .2s ease-in-out"
        _hover={{
          cursor: "pointer",
          backgroundColor: "blueTheme.cardHover",
          transform: "scale(1.05)",
        }}
      >
        <CardBody display="flow" alignItems="center" textAlign="center">
          <Icon as={FaDownload} width="55px" height="105px" />
          <Heading my={1} textAlign="center" fontSize="0.9rem" className="text-button-resume">
            {t('resumeDownload')}
          </Heading>
        </CardBody>
      </Card>
    </button>
  );
}

export default DownloadButton;
