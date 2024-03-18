import {Card, CardBody, CardFooter, CardGroup, CardText, Col, Row} from "react-bootstrap";
import {useState} from "react";

export default function ReviewPage() {
    const [reviews, SetReviews] = useState([
        {name: "Joe Biden", review: "Best Professional on the field.", point: 5},
        {name: "Liszt Ferenc", review: "Kindest person.", point: 5},
        {name: "Sanyi Petőfi", review: "Loved the retreat!", point: 5},
        {name: "Matilda", review: "Nice!", point: 4.5},

    ])

    return (
        <div>
            <Card className={"p-3"}>
                <Row xs={1} md={2} className="g-3">
                    {reviews && reviews.map((r, i) => {

                            return (
                                <Col key={i}>
                                    <Card key={i}>
                                        <CardBody>
                                            <CardText>{r.review}</CardText>
                                            <CardText>{r.name}</CardText>
                                        </CardBody>
                                        <CardFooter>
                                            <CardText>{r.point}/5</CardText>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            )
                        }
                    )}
                </Row>
            </Card>
            <iframe src="https://calendar.google.com/calendar/embed?src=9ba56c8c0e39b7b181733d2b442da1ce9afb0fe6b5745667edb1f949bf38a730%40group.calendar.google.com&ctz=Europe%2FBudapest"
                 width="800" height="600" frameBorder="0" scrolling="no">

            </iframe>
        </div>
    )
}