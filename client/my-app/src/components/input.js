import React from "react";

const CustomInput = ({ innerText, descriptor, field, placeholder, handler }) => {
 return (
  <div className="form-group-reganimal">
   <label htmlFor="edad">{innerText}</label>
   <input id={descriptor} name={descriptor} type="text" placeholder={placeholder} value={field} onChange={handler} />
  </div>
 );
};

export default CustomInput;

