import React from "react";
import "../index.css";

const InvitationOpening = ({ onOpen }) => {
  return (
    <div className="invitation-wrapper">
      <div className="invitation-envelope">
        <div className="flower flower-left" />
        <div className="flower flower-right" />

        <div className="letter">
          <div className="bride-groom">
            <div className="character bride">👰</div>
            <div className="character groom">🤵</div>
          </div>
          <h1 className="invitation-title">Урилга</h1>
          <p className="invitation-message">
            Бидний хуримд хүрэлцэн ирэхийг урьж байна.
          </p>
          <button className="btn open-btn" onClick={onOpen}>
            Урилгыг нээх
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationOpening;
