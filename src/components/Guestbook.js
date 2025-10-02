// src/components/Guestbook.js
import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Button, Carousel, Alert } from "react-bootstrap";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export default function Guestbook() {
    const [messages, setMessages] = useState([]); // firestore messages
    const [alert, setAlert] = useState({ show: false, variant: "", message: "" });
    const carouselRef = useRef(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            // Sort messages by timestamp descending
            msgs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setMessages(msgs);
        });
        return () => unsubscribe(); // cleanup listener
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const messageData = {
            message: e.target.message.value,
            fromWho: e.target.fromWho.value,
            timestamp: new Date().toISOString(),
        };
        try {
            await addDoc(collection(db, "messages"), messageData);
            setAlert({ show: true, variant: "success", message: "Баярлалаа! Мэндчилгээ амжилттай илгээгдлээ." });
            e.target.reset();
        } catch (err) {
            console.error("Firestore-д бичихэд алдаа:", err);
            setAlert({ show: true, variant: "danger", message: "Алдаа гарлаа. Дахин оролдоно уу." });
        }
    };

    return (
        <section id="guestbook" className="section py-5">
            <Container>
                <h2 className="mb-4 text-center">Зочдын мэндчилгээ</h2>

                {/* Alert Message */}
                {alert.show && (
                    <Alert
                        variant={alert.variant}
                        onClose={() => setAlert({ ...alert, show: false })}
                        dismissible
                    >
                        {alert.message}
                    </Alert>
                )}

                <div className="guestbook p-4 bg-light rounded shadow-sm mb-4">
                    <p>Бидний баярыг хуваалцаж, урьдчилан баяр хүргэсэнд талархаж байна!</p>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="message" className="mb-3">
                            <Form.Label>Мэндчилгээ:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                type="text"
                                name="message"
                                placeholder="Мэндчилгээ үлдээнэ үү"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="fromWho" className="mb-3">
                            <Form.Label>Хэнээс:</Form.Label>
                            <Form.Control
                                type="text"
                                name="fromWho"
                                placeholder="Таны нэр"
                                required

                            />
                        </Form.Group>
                        <Button type="submit" variant="danger">
                            Мэндчилгээ илгээх
                        </Button>
                    </Form>
                </div>

                <div className="position-relative">
                    <Carousel ref={carouselRef} interval={5000} pause={false} controls={false} indicators={false}>
                        {messages.map((msg) => (
                            <Carousel.Item key={msg.id}>
                                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "150px" }}>
                                    <div className="text-center">
                                        <strong><p className="mb-1">{msg.fromWho}:</p></strong>
                                        <p className="mb-1">{msg.message}</p>
                                        <small className="text-muted">{msg.timestamp.split("T")[0]}</small>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    {/* Prev/Next Buttons */}
                    <Button
                        variant="light"
                        className="position-absolute top-50 start-0 translate-middle-y"
                        onClick={() => carouselRef.current.prev()}
                    >
                        &#10094;
                    </Button>
                    <Button
                        variant="light"
                        className="position-absolute top-50 end-0 translate-middle-y"
                        onClick={() => carouselRef.current.next()}
                    >
                        &#10095;
                    </Button>
                </div>
            </Container>
        </section>
    );
}
