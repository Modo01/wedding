import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Table, Container, Pagination, Row, Col, Card } from "react-bootstrap";
import Surprise from "../assets/surprise.webp"; // import local image

export function AdminRSVP() {
    const [rsvps, setRsvps] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "rsvp"), (snapshot) => {
            const rsvpList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            rsvpList.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setRsvps(rsvpList);
        });

        return () => unsubscribe();
    }, []);

    // Pagination logic
    const totalPages = Math.ceil(rsvps.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = rsvps.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => setCurrentPage(page);

    // Calculate total guests
    const totalAdults = rsvps.reduce((sum, rsvp) => sum + Number(rsvp.guestsAdult || 0), 0);
    const totalKids = rsvps.reduce((sum, rsvp) => sum + Number(rsvp.guestsKid || 0), 0);

    return (
        <Container style={{
            background: `url(${Surprise}) center/cover no-repeat`,
            minHeight: "100vh",
        }} className="py-5">
            <h2 className="mb-4 text-center">Зочдын мэдээлэл</h2>

            <Row className="mb-3">
                <Col md={6}>
                    <Card className="p-3 text-center">
                        <h5>Нийт том хүний тоо</h5>
                        <p className="mb-0 fw-bold">{totalAdults}</p>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-3 text-center">
                        <h5>Нийт хүүхдийн тоо</h5>
                        <p className="mb-0 fw-bold">{totalKids}</p>
                    </Card>
                </Col>
            </Row>

            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Нэр</th>
                    <th>Email</th>
                    <th>Утас</th>
                    <th>Мэндчилгээ</th>
                    <th>Том хүний тоо</th>
                    <th>Хүүхдийн тоо</th>
                    <th>Оролцох эсэх</th>
                    <th>Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((rsvp, index) => (
                    <tr key={rsvp.id}>
                        <td>{startIndex + index + 1}</td>
                        <td>{rsvp.name}</td>
                        <td>{rsvp.email}</td>
                        <td>{rsvp.phone}</td>
                        <td>{rsvp.message}</td>
                        <td>{rsvp.guestsAdult}</td>
                        <td>{rsvp.guestsKid}</td>
                        <td>{rsvp.attend}</td>
                        <td>{new Date(rsvp.timestamp).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Pagination className="justify-content-center">
                <Pagination.Prev
                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, idx) => (
                    <Pagination.Item
                        key={idx + 1}
                        active={currentPage === idx + 1}
                        onClick={() => handlePageChange(idx + 1)}
                    >
                        {idx + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                />
            </Pagination>
        </Container>
    );
}
