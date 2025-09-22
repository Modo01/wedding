
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header({ couple }) {
    return (
        <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#hero">
                    {couple.bride} & {couple.groom}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#story">Түүх</Nav.Link>
                        <Nav.Link href="#details">Дэлгэрэнгүй</Nav.Link>
                        <Nav.Link href="#gallery">Зургийн цомог</Nav.Link>
                        <Nav.Link href="#gifts">Бэлэг</Nav.Link>
                        <Nav.Link href="#guestbook">Зочдын дурсамж</Nav.Link>
                        <Nav.Link href="#rsvp">RSVP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
