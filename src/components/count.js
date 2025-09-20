// src/components/Count.js
import React from "react";

export default function Count({ label, value }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="count">
      <div className="v">{v}</div>
      <div className="l">{label}</div>
    </div>
  );
}
