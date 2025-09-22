// src/components/Details.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Details({ wedding, timeline }) {
    return (
        <section id="details" className="section py-5">
            <Container>
                <h2 className="mb-4 text-center">Баярын өдөр</h2>
                <Row className="g-4">
                    {/* Timeline Column */}
                    <Col xs={12} md={6}>
                        {timeline.map((item, index) => (
                            <Card key={index} className="mb-3 shadow-sm">
                                <Card.Body>
                                    <div className="d-flex align-items-start gap-3">
                                        <div style={{ minWidth: "64px", fontWeight: 600 }}>{item.time}</div>
                                        <div>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text className="text-muted">{item.desc}</Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>

                    {/* Venue Column */}
                    <Col xs={12} md={6}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>{wedding.venueName}</Card.Title>
                                <Card.Text>{wedding.venueAddress}</Card.Text>
                                <div style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "12px" }}>
                                    <iframe
                                        title="venue-map"
                                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                                            wedding.mapQuery
                                        )}&output=embed`}
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                                <Button
                                    variant="danger"
                                    href={wedding.mapOpenUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Google газрын зураг нээх
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
