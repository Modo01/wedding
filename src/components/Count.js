// src/components/Count.js
import React from "react";

export default function Count({ label, value }) {
    const v = String(value).padStart(2, "0");
    return (
        <div
            style={{
                background: "rgba(255,255,255,.9)",
                color: "#111",
                borderRadius: "16px",
                padding: "10px 8px",
                textAlign: "center",
                minWidth: "60px",
            }}
        >
            <div style={{ fontWeight: 700, fontSize: "22px" }}>{v}</div>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: ".12em", opacity: 0.7 }}>
                {label}
            </div>
        </div>
    );
}
