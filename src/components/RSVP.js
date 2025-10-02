// src/components/RSVP.js
import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function RSVP() {
    const [submitted, setSubmitted] = useState(false);
    const [alert, setAlert] = useState({ show: false, variant: "", message: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const rsvpData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
            guestsAdult: e.target.guestsAdult.value,
            guestsKid: e.target.guestsKid.value,
            attend: e.target.attend.value,
            timestamp: new Date().toISOString(),
        };

        try {
            await addDoc(collection(db, "rsvp"), rsvpData);
            setAlert({ show: true, variant: "success", message: "Баярлалаа! Таны ирэх эсэхийн мэдээлэл бүртгэгдлээ." });
            setSubmitted(true);
            e.target.reset();
        } catch (err) {
            console.error("Firestore-д бичихэд алдаа:", err);
            setAlert({ show: true, variant: "danger", message: "Алдаа гарлаа. Дахин оролдоно уу." });
        }
    };

    return (
        <section id="rsvp" className="section py-5">
            <Container>
                <h2 className="mb-4 text-center">Ирэх эсэх</h2>

                {/* Alert */}
                {alert.show && (
                    <Alert
                        variant={alert.variant}
                        dismissible
                        onClose={() => setAlert({ ...alert, show: false })}
                        className="text-center"
                    >
                        {alert.message}
                    </Alert>
                )}

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
                                    <Form.Control type="text" name="name" placeholder="Овог нэр" required />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="rsvpEmail" className="mb-3">
                                    <Form.Label>И-мэйл</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="И-мэйл" required />
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
                                <Form.Group controlId="guestsAdult" className="mb-3">

                                    <Form.Label>Том хүний тоо</Form.Label>
                                    <Form.Control type="number" name="guestsAdult" placeholder="Том хүний тоо" required min={1} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="guestsKid" className="mb-3">
                                    <Form.Label>Хүүхдийн тоо</Form.Label>
                                    <Form.Control type="number" name="guestsKid" placeholder="Хүүхдийн тоо" />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label><strong>Ирэх эсэх</strong></Form.Label>
                                    <div className="d-flex gap-3">
                                        <Form.Check type="radio" name="attend" value="yes" label="Ирнэ" defaultChecked />
                                        <Form.Check type="radio" name="attend" value="no" label="Ирэхгүй" />
                                    </div>
                                </Form.Group>
                            </Col>

                        </Row>

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
