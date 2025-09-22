// src/components/Story.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Story() {
    const storyCards = [
        {
            title: "Анхны мэндчилгээ",
            text: "Санамсаргүй танил солонгорсон дурсамж болон хувирсан.",
        },
        {
            title: "Тийм ээ!",
            text: "Тагтны оддоор дор бид насан туршийн амлалтаа өгсөн.",
        },
        {
            title: "Цаашдын амьдрал",
            text: "Аялал, инээд, зураг—дэндүү олон зураг 😊.",
        },
    ];

    return (
        <section id="story" className="section py-5">
            <Container>
                <h2 className="mb-4 text-center">Бидний түүх</h2>
                <Row className="g-4">
                    {storyCards.map((card, index) => (
                        <Col key={index} xs={12} md={4}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
