// src/components/Guestbook.js
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Guestbook() {
  const [message, setMessage] = useState("");
  const [thankYou, setThankYou] = useState(false);

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      alert("Баярлалаа! Таны мэндчилгээ бүртгэгдлээ.");
      setThankYou(true);
      setMessage("");
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
        </Container>
      </section>
  );
}
