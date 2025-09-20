// src/components/Gift.js
import React, { useState } from "react";

export default function Gift({ bank, couplePhoto }) {
  const [copied, setCopied] = useState(false);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(bank.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Хуулах боломжгүй байна.");
    }
  };

  return (
    <section id="gift" className="section">
      <div className="wrap">
        <h2>Бэлэг</h2>
        <div className="gift-grid">
          <div className="box">
            <p>
              Хуриманд ирж чадахгүй бол бидэнд бэлэг өгөх бол шинэ хос учраас
              мөнгөөр дурсгал илүүд үзнэ.
              <br />
              {bank.note}
            </p>
            <div className="bank">
              <div className="row">
                <span className="label">Банк</span>
                <span className="value">{bank.bankName}</span>
              </div>
              <div className="row">
                <span className="label">Дансны нэр</span>
                <span className="value">{bank.accountName}</span>
              </div>
              <div className="row">
                <span className="label">Дансны дугаар</span>
                <span className="value mono">{bank.accountNumber}</span>
              </div>
              <div style={{ marginTop: 12 }}>
                <button className="btn" onClick={copyAccount}>
                  {copied ? "Хуулсан!" : "Дансны дугаарыг хуулах"}
                </button>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={couplePhoto} alt="Манай зураг" className="gift-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
