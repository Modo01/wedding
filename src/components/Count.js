// src/components/Count.js
import React from "react";
import { Card } from "react-bootstrap";

export default function Count({ label, value }) {
    const v = String(value).padStart(2, "0");

    return (
        <Card
            bg="light"
            className="text-center p-2"
            style={{ minWidth: "60px", borderRadius: "16px" }}
        >
            <Card.Body className="p-1">
                <div className="fw-bold fs-4 text-success" style={{ color: "#202020" }}>
                    {v}
                </div>
                <div className="text-uppercase small text-muted" style={{ opacity: 0.7, letterSpacing: ".12em" }}>
                    {label}
                </div>
            </Card.Body>
        </Card>
    );
}
