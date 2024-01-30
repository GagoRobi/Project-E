import {Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle} from "react-bootstrap";
import {useState} from "react";

export default function EventCard({event}) {

    const {id,title,type,description,date,headcount} = event;

    return (
        <div className="mx-5 m-1">
            <Card className="p-2">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{type.name}</CardSubtitle>
                </CardHeader>
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
                <CardFooter>
                    <CardText>{date}</CardText>
                    <CardText>max: {headcount} person</CardText>
                </CardFooter>
            </Card>
        </div>

    )
}
