// src/components/Story.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Story() {
    const storyCards = [
        {
            text: "Бидний учрал бол санамсаргүй тохиолдол бус, харин Бурханы хүслээр заяасан учрал байсан. Эхэндээ богинохон яриа байсан ч тэр мөч сэтгэлд тод үлдэж, цаашдын аяллын эхлэл болсон юм. Удалгүй бидний харилцаа илүү ойртож, бие биедээ итгэж, хамтдаа инээж, суралцаж, аялж, олон дурсамж бүтээсэн. Энэ бүх хугацаанд бид нэгнээ олон өнцгөөс харж, таньж мэдэн, хайр, нөхөрлөл, итгэл дээрээ тулгуурлан харилцаагаа бататгасан. Сорилт, бэрхшээл, баяр хөөрийн дунд Бурхан биднийг алхам бүрд удирдаж, нэг нэгэндээ түшиг тулгуур болохын үнэ цэнийг ойлгуулсан. Ингээд бид нэгнээ албан ёсоор сонгож, Бурханы өмнө амьдралаа нэгтгэн эхлүүлэхээр шийдсэн нь бидний хамгийн гайхамшигтай аяллын эхлэл юм.",
            
        },
       
    ];

    return (
        <section id="story" className="section py-5">
            <Container>
                <h2 className="mb-4 text-center">Бидний хайрын түүх</h2>
                <Row className="g-4">
                    {storyCards.map((card, index) => (
                        <Col key={index}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
