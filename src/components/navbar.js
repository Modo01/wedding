// src/components/Navbar.js
import React from "react";

export default function Navbar({ couple }) {
  return (
    <header className="nav">
      <div className="wrap">
        <a href="#home" className="brand">{couple.groom} & {couple.bride}</a>
        <nav>
          <a href="#story">Бидний түүх</a>
          <a href="#details">Баярын өдөр</a>
          <a href="#gallery">Зурагт цомог</a>
          <a href="#gifts">Бэлэг</a>
          <a href="#guestbook">Мэндчилгээ</a>
          <a href="#rsvp" className="btn small">Ирэх эсэх</a>
        </nav>
      </div>
    </header>
  );
}
