// src/components/RSVP.js
import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

export default function RSVP() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Баярлалаа! Таны ирэх эсэхийн мэдээлэл бүртгэгдлээ.");
        setSubmitted(true);
        e.target.reset();
    };

    return (
        <section id="rsvp" className="section py-5">
            <Container>
                <h2 className="mb-4 text-center">Ирэх эсэх</h2>

                {submitted ? (
                    <p className="text-success text-center">
                        Таны мэдээлэл бүртгэгдлээ. Баярлалаа!
                    </p>
                ) : (
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col xs={12} md={6}>
                                <Form.Group controlId="rsvpName" className="mb-3">
                                    <Form.Label>Овог нэр</Form.Label>
                                    <Form.Control type="text" name="name" required />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="rsvpEmail" className="mb-3">
                                    <Form.Label>И-мэйл</Form.Label>
                                    <Form.Control type="email" name="email" required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col xs={12} md={6}>
                                <Form.Group controlId="rsvpPhone" className="mb-3">
                                    <Form.Label>Утас</Form.Label>
                                    <Form.Control type="number" name="phone" placeholder="Утасны дугаар" />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="rsvpGuests" className="mb-3">
                                    <Form.Label>Зочдын тоо</Form.Label>
                                    <Form.Select name="guests" defaultValue="1">
                                        {[1, 2, 3, 4, 5].map((n) => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label><strong>Ирэх эсэх</strong></Form.Label>
                            <div className="d-flex gap-3">
                                <Form.Check
                                    type="radio"
                                    name="attend"
                                    value="yes"
                                    label="Ирнэ"
                                    defaultChecked
                                />
                                <Form.Check
                                    type="radio"
                                    name="attend"
                                    value="no"
                                    label="Ирэхгүй"
                                />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Санал хүсэлт</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                placeholder="Мессеж үлдээнэ үү"
                                rows={4}
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" variant="danger">Илгээх</Button>
                        </div>
                    </Form>
                )}
            </Container>
        </section>
    );
}
