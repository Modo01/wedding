// src/components/Guestbook.js
import React, { useState } from "react";

export default function Guestbook() {
  const [message, setMessage] = useState("");
  const [thankYou, setThankYou] = useState(false);

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      alert("Баярлалаа! Таны мэндчилгээ бүртгэгдлээ.");
      setThankYou(true);
      setMessage("");
    } else {
      alert("Та мэндчилгээ үлдээх хэрэгтэй.");
    }
  };

  return (
    <div>     <h2>Зочдын мэндчилгээ</h2>
    <div className="guestbook">
 
      <p>Бидний баярыг хуваалцаж, урьдчилан баяр хүргэсэнд талархаж байна!</p>

      {thankYou ? (
        <p>Таны мэндчилгээ бидэнд хүрлээ! Баярлалаа!</p>
      ) : (
        <form onSubmit={handleSubmit} className="guestbook-form">
          <div className="field">
            <textarea
              name="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Мэндчилгээ үлдээнэ үү"
              rows={4}
              required
            />
          </div>
          <button type="submit" className="btn">
            Мэндчилгээ илгээх
          </button>
        </form>
      )}
    </div>
    </div>
  );
}
