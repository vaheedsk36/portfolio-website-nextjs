import React from 'react';

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
      <button onClick={this.handleDownload}>Download CV</button>
    );
  }
}

export default DownloadButton;