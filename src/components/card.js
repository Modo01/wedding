// src/components/Card.js
import React from "react";

export default function Card({ title, text }) {
  return (
    <div className="card">
      <div className="ctitle">{title}</div>
      <p>{text}</p>
    </div>
  );
}
