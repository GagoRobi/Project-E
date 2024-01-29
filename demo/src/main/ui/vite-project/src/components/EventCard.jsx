import {Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle} from "react-bootstrap";
import {useState} from "react";

export default function EventCard({event}) {

    return (
        <div className="mx-5 m-1">
            <Card className="p-2">
                <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardSubtitle>{event.type}</CardSubtitle>
                </CardHeader>
                <CardBody>
                    <CardText>{event.description}</CardText>
                </CardBody>
                <CardFooter>
                    <CardText>{event.date}</CardText>
                    <CardText>max: {event.headcount} person</CardText>

                </CardFooter>
            </Card>
        </div>

    )
}
