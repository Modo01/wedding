// src/components/Hero.js
import React from "react";
import {Container, Row, Col, Button, Image} from "react-bootstrap";
import Count from "./Count";
import useCountdown from "../hooks/useCountdown";
import Flowers from "../assets/Flowers.png";

export default function Hero({couple, wedding, formatDate}) {
    const targetDate = new Date(wedding.dateISO);
    const remain = useCountdown(targetDate);




    const heroStyle = {
        minHeight: "90vh",
        backgroundImage: `url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2400')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Cormorant Infant', serif",
    };

    const overlayStyle = {
        position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)",
    };

    const innerStyle = {
        position: "relative", textAlign: "center", width: "100%",
    };

    const buttonStyle = {
        backgroundColor: "transparent", border: "2px solid #d6bfa7", // beige
        color: "#d6bfa7", padding: "10px 26px", fontSize: "18px", borderRadius: "30px", transition: "all 0.3s ease",
    };

    const buttonHoverStyle = {
        backgroundColor: "#d6bfa7", color: "#202020",
    };

    const countdownBox = {
       // background: "rgba(32,32,32,0.6)",
        padding: "12px 18px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "22px",
    };

    return (<section id="hero" style={heroStyle}>
        <div style={overlayStyle}/>
        <Container style={innerStyle}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {/* Flowers on top */}
                    <Image
                        src={Flowers}
                        alt="Flowers"
                        fluid
                        style={{maxWidth: "200px", marginBottom: "20px"}}
                    />

                    <p style={{textTransform: "uppercase", letterSpacing: ".3em", opacity: 0.9}}>
                        Бид гэрлэж байна
                    </p>
                    <h1 style={{fontSize: "clamp(36px, 7vw, 64px)", margin: ".3em 0 .2em"}}>
                        {couple.bride} & {couple.groom}
                    </h1>
                    <p style={{opacity: 0.9, marginBottom: "18px"}}>
                        {formatDate(targetDate)} • {wedding.venueName}
                    </p>

                    {/* Countdown with transparent bg */}
                    <div style={countdownBox}>
                        <Count label="Өдөр" value={remain.days}/>
                        <Count label="Цаг" value={remain.hours}/>
                        <Count label="Минут" value={remain.minutes}/>
                        <Count label="Секунд" value={remain.seconds}/>
                    </div>

                    {/* Custom button */}
                    <Button
                        href="#rsvp"
                        size="lg"
                        style={buttonStyle}
                        onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                        onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                    >
                        Хуриманд оролцох
                    </Button>
                </Col>
            </Row>
        </Container>
    </section>);
}
