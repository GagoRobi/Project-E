import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    CloseButton
} from "react-bootstrap";
import {useEffect, useState} from "react";
import ConfirmMessageModal from "./ConfirmMessageModal.jsx";

export default function EventCard({event}) {
    const {id,title,type,description,date,headcount} = event;

    return (
        <div className="mx-5 m-1">

            <Card className="p-2">
                <CardHeader>
                    <CardTitle className={"position-relative"} >{title}
                        <ConfirmMessageModal  />
                    </CardTitle>
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
