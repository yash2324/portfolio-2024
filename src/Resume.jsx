import React from "react";
import resumePDF from "./assets/Yash_Gupta_Resume.pdf";

const Resume = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <object data={resumePDF} type="application/pdf" className="w-full h-full">
        <p className="p-4 text-center">
          It appears your browser doesn't support embedded PDFs. You can{" "}
          <a
            href={resumePDF}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            download the PDF
          </a>{" "}
          to view it.
        </p>
      </object>
    </div>
  );
};

export default Resume;
