// src/components/Field.js
import React from "react";

export default function Field({ label, name, type = "text", placeholder = "", required = false }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} required={required} />
    </div>
  );
}
