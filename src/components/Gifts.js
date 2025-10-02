// src/components/Gifts.js
import React, { useState } from "react";
import { Container, Row, Col, Button, Image, Modal } from "react-bootstrap";

export default function Gifts({ bank }) {
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(bank.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Хуулах боломжгүй байна. Дахин оролдоно уу.");
    }
  };

  return (
    <section id="gifts" className="section py-5">
      <Container>
        <h2 className="mb-4 text-center">Бэлэг</h2>

        {/* ⬇️ Compact border wrapper (centered) */}
        <div
          className="mx-auto"
          style={{
            border: "2px solid #dee2e6", // Bootstrap "danger"
            borderRadius: 12,
            padding: 12,
            maxWidth: 900, // tighten the overall width; adjust 680–900 as you prefer
            width: "100%",
          }}
        >
          <Row className="g-3 align-items-center justify-content-center text-center">
            {/* Left: Message + Trigger */}
            <Col xs={12} md={6} lg={5} className="mx-auto">
              <p className="mb-3">
                <strong>Таны залбирал, оролцоо бол бидний хувьд хамгийн том бэлэг.</strong>
                <br />
                Харин хэрэв та хүрэлцэн ирж чадалгүй, сэтгэлийн мэндчилгээгээ бэлэг хэлбэрээр
                илгээхийг хүсвэл, доорх товчийг дарна уу.
              </p>

              <Button variant="danger" onClick={() => setShow(true)}>
                Бэлэг илгээх
              </Button>
            </Col>

            {/* Right: Couple Photo */}
            <Col xs={12} md={5} lg={4} className="d-flex justify-content-center mx-auto">
              <Image
                src={`${process.env.PUBLIC_URL}/images/gift.jpg`}
                alt="Манай зураг"
                fluid
                rounded
                style={{ aspectRatio: "3/4", objectFit: "cover", maxWidth: 360 }}
              />
            </Col>
          </Row>
        </div>

        {/* Modal with bank details */}
        <Modal
          show={show}
          onHide={() => setShow(false)}
          centered
          aria-labelledby="gift-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="gift-modal-title">Бэлгийн мэдээлэл</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {bank?.note && <p className="text-muted small mb-3">{bank.note}</p>}

            <div className="p-3 bg-white border rounded">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Банк</span>
                <strong>{bank.bankName}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Дансны нэр</span>
                <strong>{bank.accountName}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Дансны дугаар</span>
                <strong>{bank.accountNumber}</strong>
              </div>

              <div className="mt-3 d-flex gap-2 flex-wrap justify-content-center">
                <Button variant="danger" onClick={copyAccount}>
                  {copied ? "Хуулсан!" : "Дансны дугаарыг хуулах"}
                </Button>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="justify-content-center">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Хаах
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}
