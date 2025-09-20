// src/components/RSVP.js
import React from "react";
import Field from "./field";

export default function RSVP({ onSubmit }) {
  return (
    <section id="rsvp" className="section">
      <div className="wrap">
        <h2>Ирэх эсэх</h2>
        <form className="form" onSubmit={onSubmit}>
          <div className="row">
            <Field label="Овог нэр" name="name" required />
            <Field label="И-мэйл" name="email" type="email" required />
          </div>
          <div className="row">
            <Field label="Утас" name="phone" placeholder="(+976) 88xx xxxx" />
            <div className="field">
              <label>Зочдын тоо</label>
              <select name="guests" defaultValue="1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label>Ирэх эсэх</label>
              <div className="radios">
                <label>
                  <input type="radio" name="attend" value="yes" defaultChecked /> Ирнэ
                </label>
                <label>
                  <input type="radio" name="attend" value="no" /> Ирэхгүй
                </label>
              </div>
            </div>
          
          </div>
          <div className="field">
            <label>Санал хүсэлт</label>
            <textarea name="message" placeholder="Мессеж үлдээнэ үү" rows={4} />
          </div>
          <button className="btn" type="submit">
            Илгээх
          </button>
        </form>
      </div>
    </section>
  );
}
