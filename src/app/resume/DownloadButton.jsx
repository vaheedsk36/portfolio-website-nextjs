import React from 'react';

import {
    Card,
    CardBody,
    Heading,
    Icon,
  } from "@chakra-ui/react";
  import { FaDownload} from "react-icons/fa6";

class DownloadButton extends React.Component {
  handleDownload = () => {

    const cvPath = '/resume.pdf'

    // Use the `fetch` API to retrieve the CV file.
    fetch(cvPath)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then((blob) => {

// Create a temporary anchor element to trigger the download.
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.style.display = 'none';
a.href = url;
a.download = 'resume.pdf' // Set the desired filename for the download.
document.body.appendChild(a);
a.click();
window.URL.revokeObjectURL(url); // Clean up the URL object after download.
  })
  .catch((error) => {
    console.error('Error downloading CV:', error);
  });
  };

  render() {
    return (
      <button onClick={this.handleDownload}>
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
        <Icon  as={FaDownload} width="55px" height="105px" />
        <Heading my={1} textAlign="center" fontSize="0.9rem" className="text-button-resume">
            Download
        </Heading>
      </CardBody>
    </Card>
      </button>
    );
  }
}

export default DownloadButton;