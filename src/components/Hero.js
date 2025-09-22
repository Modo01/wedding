// src/components/Hero.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Count from "./Count";
import useCountdown from "../hooks/useCountdown";

export default function Hero({ couple, wedding, formatDate }) {
    const targetDate = new Date(wedding.dateISO);
    const remain = useCountdown(targetDate);

    const heroStyle = {
        minHeight: "70vh",
        backgroundImage: `url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2400')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
        display: "flex",
        alignItems: "center",
    };

    const overlayStyle = {
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
    };

    const innerStyle = {
        position: "relative",
        textAlign: "center",
        width: "100%",
    };

    return (
        <section id="hero" style={heroStyle}>
            <div style={overlayStyle} />
            <Container style={innerStyle}>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <p style={{ textTransform: "uppercase", letterSpacing: ".3em", opacity: 0.9 }}>
                            Бид гэрлэж байна
                        </p>
                        <h1 style={{ fontSize: "clamp(36px, 7vw, 64px)", margin: ".3em 0 .2em" }}>
                            {couple.bride} & {couple.groom}
                        </h1>
                        <p style={{ opacity: 0.9, marginBottom: "18px" }}>
                            {formatDate(targetDate)} • {wedding.venueName}
                        </p>

                        {/* Countdown */}
                        <div className="d-flex justify-content-center gap-3 mb-3">
                            <Count label="Өдөр" value={remain.days} />
                            <Count label="Цаг" value={remain.hours} />
                            <Count label="Минут" value={remain.minutes} />
                            <Count label="Секунд" value={remain.seconds} />
                        </div>

                        <Button href="#rsvp" variant="danger" size="lg">
                            Хуриманд оролцох
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
