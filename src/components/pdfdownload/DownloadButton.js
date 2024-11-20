import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';
import './DownloadButton.css'; // Import the CSS file

const DownloadButton = ({ data }) => {
  console.log('Data for PDF:', data); // Log the data for debugging
  return (
    <div className="button-container">
      <PDFDownloadLink document={<PdfDocument data={data} />} fileName="RFQ Policy.pdf">
        {({ blob, url, loading, error }) =>
          loading ? (
            <button className="download-button" disabled>
              Loading document...
            </button>
          ) : (
            <button className="download-button">
              Download PDF
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadButton;
