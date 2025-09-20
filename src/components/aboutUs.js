// src/components/aboutus.js
import React from "react";
import "../index.css";

export default function AboutUs() {
  return (
    <section className="aboutus section" id="aboutus">
      <div className="aboutus-container">
        <div className="aboutus-person">
          <img
            src={`${process.env.PUBLIC_URL}/images/groom.png`}
            alt="Groom"
            className="aboutus-image"
          />
          <h3 className="aboutus-name">Мөдө</h3>
          <p className="aboutus-desc">Би бол сүйт хархүү. Миний зүрх гүнжийнх 💖</p>
        </div>

        <div className="aboutus-heart">&</div>

        <div className="aboutus-person">
          <img
            src={`${process.env.PUBLIC_URL}/images/bride.png`}
            alt="Bride"
            className="aboutus-image"
          />
          <h3 className="aboutus-name">Гүнжээ</h3>
          <p className="aboutus-desc">Би бол сүйт бүсгүй. Хамтдаа ирээдүй рүү 🌸</p>
        </div>
      </div>
    </section>
  );
}
