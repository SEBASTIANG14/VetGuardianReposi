import React from "react";

const CustomField = ({ fieldTitle, fieldContent }) => {
 return (
  <div className="field-container">
   <h1>{fieldTitle}:</h1>
   <h1>{fieldContent}</h1>
  </div>
 );
};

export default CustomField;

