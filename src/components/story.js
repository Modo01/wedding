// src/components/Story.js
import React from "react";
import Card from "./card";

export default function Story() {
  const CARDS = [
    { title: "Анхны мэндчилгээ", text: "Санамсаргүй танил солонгорсон дурсамж болон хувирсан." },
    { title: "Тийм ээ!", text: "Тагтны оддоор дор бид насан туршийн амлалтаа өгсөн." },
    { title: "Цаашдын амьдрал", text: "Аялал, инээд, зураг—дэндүү олон зураг 😊." },
  ];

  return (
    <section id="story" className="section">
      <div className="wrap">
        <h2>Бидний түүх</h2>
        <div className="cards">
          {CARDS.map((c,i)=> <Card key={i} title={c.title} text={c.text} />)}
        </div>
      </div>
    </section>
  );
}
