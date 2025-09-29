// src/components/Header.js
import React from "react";
import {Container} from "react-bootstrap";

export default function Header({couple}) {
    return (<header
        style={{
            background: "white", borderBottom: "1px solid #eee", top: 0, zIndex: 50,
        }}
    >
        <Container className="text-center py-3">
            <h1
                style={{
                    fontFamily: "'Cormorant Infant', serif", fontSize: "2rem", margin: 0, color: "#202020", // dark
                }}
            >
                {couple.bride} & {couple.groom}
            </h1>
        </Container>
    </header>);
}
