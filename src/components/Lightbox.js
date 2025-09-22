// src/components/Lightbox.js
import React from "react";
import { Modal, Row, Col, Image, Button } from "react-bootstrap";

export default function Lightbox({ show, onClose, images, title = "Бүх зураг" }) {
    return (
        <Modal
            show={show}
            onHide={onClose}
            size="xl"
            aria-labelledby="lightbox-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="lightbox-modal">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="g-3">
                    {images.map((src, index) => (
                        <Col key={index} xs={6} md={3}>
                            <Image
                                src={src}
                                alt={`lightbox-${index}`}
                                thumbnail
                                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }}
                            />
                        </Col>
                    ))}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Хаах
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
