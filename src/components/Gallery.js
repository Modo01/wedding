// src/components/Gallery.js
import React, { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Lightbox from "./Lightbox";

export default function Gallery({ gallery, wedding }) {
    const [showLightbox, setShowLightbox] = useState(false);

    return (
        <section id="gallery" className="section py-5">
            <Container>
                <h2 className="mb-4 text-center">Зургийн цомог</h2>

                {/* Grid of images */}
                <Row className="g-3">
                    {gallery.map((src, index) => (
                        <Col key={index} xs={6} md={3}>
                            <Image
                                src={src}
                                alt={`gallery-${index}`}
                                thumbnail
                                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }}
                            />
                        </Col>
                    ))}
                </Row>

                {/* Button to open lightbox */}
                <div className="text-center mt-3">
                    <Button variant="outline-danger" onClick={() => setShowLightbox(true)}>
                        Бүх зураг харах
                    </Button>
                </div>

                {/* Reusable Lightbox */}
                <Lightbox
                    show={showLightbox}
                    onClose={() => setShowLightbox(false)}
                    images={gallery}
                    title="Бүх зураг"
                />

                <p className="text-center mt-3 text-muted">
                    Зурагнуудаа <strong>{wedding.hashtag}</strong> хаштагтай хуваалцаарай.
                </p>
            </Container>
        </section>
    );
}
