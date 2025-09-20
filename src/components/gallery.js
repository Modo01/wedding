// src/components/Gallery.js
import React, { useState, useEffect } from "react";

export default function Gallery({ images, hashtag }) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = galleryOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [galleryOpen]);

  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <h2>Зурагт цомог</h2>
        <div className="gallery">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`g-${i}`} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 12 }}>
          <button className="btn outline" onClick={() => setGalleryOpen(true)}>
            Бүх зураг харах
          </button>
        </div>
        <p style={{ marginTop: 12, color: "#6b7280" }}>
          Зурагнуудаа {hashtag} хаштагтай хуваалцаарай.
        </p>

        {galleryOpen && (
          <div className="lightbox">
            <div className="backdrop" onClick={() => setGalleryOpen(false)} />
            <div className="inner">
              <button className="close" onClick={() => setGalleryOpen(false)}>
                ×
              </button>
              <div className="lgallery">
                {images.map((src, i) => (
                  <img key={`lg-${i}`} src={src} alt={`full-${i}`} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
