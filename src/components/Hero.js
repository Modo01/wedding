// src/components/Hero.js
import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Count from "./Count";
import useCountdown from "../hooks/useCountdown";
import Flowers from "../assets/Flowers.png";

export default function Hero({ couple, wedding, formatDate }) {
    const targetDate = new Date(wedding.dateISO);
    const remain = useCountdown(targetDate);

    return (
        <section
            id="hero"
            className="d-flex align-items-center text-center text-white"
            style={{
                minHeight: "100vh",
                background: `url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2400') center/cover no-repeat`,
                fontFamily: "'Cormorant Infant', serif",
                position: "relative",
            }}
        >
            {/* Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
            ></div>

            <Container className="position-relative">
                <Row className="justify-content-center">
                    <Col md={8}>
                        {/* Flowers */}
                        <Image src={Flowers} alt="Flowers" fluid className="mb-3" style={{ maxWidth: "200px" }} />

                        <p className="text-uppercase opacity-75 letter-spacing-1 mb-2">Бид гэрлэж байна</p>
                        <h1 className="mb-2" style={{ fontSize: "clamp(36px, 7vw, 64px)" }}>
                            {couple.groom} & {couple.bride}
                        </h1>
                        <p className="opacity-75 mb-3">
                            {formatDate(targetDate)} • {wedding.venueName}
                        </p>

                        {/* Countdown */}
                        <div className="d-flex justify-content-center gap-3 mb-3 p-3 rounded ">
                            <Count label="Өдөр" value={remain.days} />
                            <Count label="Цаг" value={remain.hours} />
                            <Count label="Минут" value={remain.minutes} />
                            <Count label="Секунд" value={remain.seconds} />
                        </div>

                        {/* Button */}
                        <Button
                            href="#rsvp"
                            size="lg"
                            variant="outline-light"
                            className="border-beige text-beige rounded-pill px-4 py-2"
                        >
                            Хуриманд оролцох
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
