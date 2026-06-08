import React from "react";
import { jsPDF } from "jspdf";

function InvoiceDownload() {
  const downloadInvoice = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Invoice", 20, 20);

    doc.setFontSize(12);
    doc.text("Invoice No: INV-1001", 20, 40);
    doc.text("Customer: John Doe", 20, 50);
    doc.text("Amount: ₹500", 20, 60);
    doc.text("Status: Paid", 20, 70);

    doc.save("invoice_INV-1001.pdf");
  };

  return (
    <button onClick={downloadInvoice}>
      Download Invoice
    </button>
  );
}

export default InvoiceDownload;