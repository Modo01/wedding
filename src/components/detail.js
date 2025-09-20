// src/components/Details.js
import React from "react";

export default function Details({ timeline, wedding }) {
  return (
    <section id="details" className="section">
      <div className="wrap">
        <h2>Баярын өдөр</h2>
        <div className="grid-2">
          <ul className="timeline">
            {timeline.map((item, i) => (
              <li key={i}>
                <span className="time">{item.time}</span>
                <div className="box">
                  <div className="btitle">{item.title}</div>
                  <div className="bdesc">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="venue box">
            <h3>{wedding.venueName}</h3>
            <p>{wedding.venueAddress}</p>
            <div className="map">
              <iframe
                title="map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  wedding.mapQuery
                )}&output=embed`}
              />
            </div>
            <a className="btn" href={wedding.mapOpenUrl} target="_blank" rel="noreferrer">
              Google газрын зураг нээх
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
