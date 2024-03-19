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
import {PopupButton} from "react-calendly";
import CalendarPopUp from "./CalendarPopUp.jsx";
export default function EventCard({event, onDelete}) {
    const {id,title,type,description,date,headcount,link} = event;
    const [c, setC] = useState(0)

    return (
        <div className="mx-5 m-1">

            <Card className="p-2">
                <CardHeader>
                    <CardTitle className={"position-relative"} >{title}
                        {sessionStorage.getItem("token")?.length > 5 ? <ConfirmMessageModal onSubmit={onDelete}/> : <></>}
                    </CardTitle>
                    <CardSubtitle>{type.name}</CardSubtitle>
                    <CardText>{date}</CardText>
                </CardHeader>
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
                <CardFooter>

                    <CardText>max: {headcount} person</CardText>
                    <CardText>applied: {c}</CardText>

                    <CalendarPopUp link={link} />

                </CardFooter>
            </Card>

        </div>

    )
}
