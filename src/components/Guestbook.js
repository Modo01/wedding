// src/components/Guestbook.js
import React, {useEffect, useRef, useState} from "react";
import {Container, Form, Button, Carousel} from "react-bootstrap";
import {db} from "../firebase";
import {collection, addDoc, onSnapshot} from "firebase/firestore";

export default function Guestbook() {
    const [message, setMessage] = useState(""); // textarea input
    const [messages, setMessages] = useState([]); // firestore messages
    const [thankYou, setThankYou] = useState(false);
    const carouselRef = useRef(null);
    const handleMessageChange = (e) => setMessage(e.target.value);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            // Sort messages by timestamp descending
            msgs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setMessages(msgs);
        });
        return () => unsubscribe(); // cleanup listener
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim()) {
            try {
                await addDoc(collection(db, "messages"), {
                    message: message,
                    timestamp: new Date().toISOString(),
                });
                setThankYou(true);
                setMessage("");
            } catch (err) {
                console.error("Error: ", err);
                alert("Алдаа гарлаа. Дахин оролдоно уу.");
            }
        } else {
            alert("Та мэндчилгээ үлдээх хэрэгтэй.");
        }
    };

    return (
        <section id="guestbook" className="section py-5">
            <Container>
                <h2 className="mb-4 text-center">Зочдын мэндчилгээ</h2>
                <div className="guestbook p-4 bg-light rounded shadow-sm">
                    <p>
                        Бидний баярыг хуваалцаж, урьдчилан баяр хүргэсэнд талархаж байна!
                    </p>

                    {thankYou ? (
                        <p className="text-success">Таны мэндчилгээ бидэнд хүрлээ! Баярлалаа!</p>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="guestbookMessage">
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Мэндчилгээ үлдээнэ үү"
                                    value={message}
                                    onChange={handleMessageChange}
                                    required
                                />
                            </Form.Group>
                            <Button type="submit" variant="danger">
                                Мэндчилгээ илгээх
                            </Button>
                        </Form>
                    )}
                </div>

                {/*<ul className="mt-4">*/}
                {/*    {messages.map(msg => (*/}
                {/*        <li key={msg.id}>*/}
                {/*            {msg.message} - {new Date(msg.timestamp).toLocaleString()}*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
                <div className="position-relative">
                    <Carousel ref={carouselRef} interval={5000} pause={false} controls={false} indicators={false}>
                        {messages.map((msg) => (
                            <Carousel.Item key={msg.id}>
                                <div
                                    className="d-flex justify-content-center align-items-center"
                                    style={{ minHeight: "150px" }}
                                >
                                    <div className="text-center">
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
                        &#10094; {/* Left arrow */}
                    </Button>
                    <Button
                        variant="light"
                        className="position-absolute top-50 end-0 translate-middle-y"
                        onClick={() => carouselRef.current.next()}
                    >
                        &#10095; {/* Right arrow */}
                    </Button>
                </div>

            </Container>
        </section>
    );
}
