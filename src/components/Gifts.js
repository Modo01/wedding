// src/components/Gifts.js
import React, {useState} from "react";
import {Container, Row, Col, Button, Image} from "react-bootstrap";

export default function Gifts({bank}) {
    const [copied, setCopied] = useState(false);

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

                <Row className="g-4 align-items-center">
                    {/* Left: Bank Info */}
                    <Col xs={12} md={7}>
                        <p>
                            Таны ирц бидэнд хамгийн том бэлэг юм. Хэрэв бэлэг өгөхийг хүсвэл бид шинэ амьдралаа эхлүүлж
                            буй тул <strong>мөнгөн дэжлэг</strong> үзүүлэхийг илүүд үзэж байна. Гүйлгээний утгад
                            өөрийн нэрээ бичээрэй.<br/>
                            <span className="text-muted">{bank.note}</span>
                        </p>

                        <div className="p-3 bg-white border rounded shadow-sm">
                            <Row className="mb-2">
                                <Col xs={4} className="text-muted">Банк</Col>
                                <Col xs={8} className="fw-bold">{bank.bankName}</Col>
                            </Row>
                            <Row className="mb-2">
                                <Col xs={4} className="text-muted">Дансны нэр</Col>
                                <Col xs={8} className="fw-bold">{bank.accountName}</Col>
                            </Row>
                            <Row className="mb-2">
                                <Col xs={4} className="text-muted">Дансны дугаар</Col>
                                <Col xs={8} className="fw-bold">{bank.accountNumber}</Col>
                            </Row>

                            <div className="mt-3 d-flex gap-2 flex-wrap">
                                <Button variant="danger" onClick={copyAccount}>
                                    {copied ? "Хуулсан!" : "Дансны дугаарыг хуулах"}
                                </Button>
                            </div>
                        </div>
                    </Col>

                    {/* Right: Couple Photo */}
                    <Col xs={12} md={5}>
                        <Image
                            src={`${process.env.PUBLIC_URL}/images/couples.JPG`}
                            alt="Манай зураг"
                            fluid
                            rounded
                            style={{aspectRatio: "3/4", objectFit: "cover"}}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
