import React from "react";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <a href="#home" className="nav-item">🏠<span>Нүүр</span></a>
      <a href="#story" className="nav-item">💌<span>Түүх</span></a>
      <a href="#gallery" className="nav-item">📸<span>Зураг</span></a>
      <a href="#gift" className="nav-item">🎁<span>Бэлэг</span></a>
      <a href="#rsvp" className="nav-item">✅<span>Ирэх эсэх</span></a>
    </nav>
  );
};

export default BottomNav;
