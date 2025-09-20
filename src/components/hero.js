// src/components/Hero.js
import React, { useMemo, useState, useEffect } from "react";
import Count from "./count";

export default function Hero({ couple, wedding }) {
  const targetDate = useMemo(() => new Date(wedding.dateISO), [wedding.dateISO]);
  const [remain, setRemain] = useState(getRemain(targetDate));

  useEffect(() => {
    const t = setInterval(() => setRemain(getRemain(targetDate)), 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/couple.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay" />
      <div className="inner">
        <p className="kicker">Бид гэрлэж байна</p>
        <h1>{couple.bride} & {couple.groom}</h1>
        <p className="meta">{formatDateLongMN(targetDate)} • {wedding.venueName}</p>

        <div className="countdown">
          <Count label="Өдөр" value={remain.days} />
          <Count label="Цаг" value={remain.hours} />
          <Count label="Минут" value={remain.minutes} />
          <Count label="Секунд" value={remain.seconds} />
        </div>

        <a href="#rsvp" className="btn" style={{ marginTop: 16 }}>Хуриманд оролцох</a>
      </div>
    </section>
  );
}

// Helpers
function getRemain(target) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  return { days, hours, minutes, seconds };
}

function formatDateLongMN(date) {
  return date.toLocaleDateString("mn-MN", { year: "numeric", month: "long", day: "numeric" });
}
