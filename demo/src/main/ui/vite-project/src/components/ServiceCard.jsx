import React from "react";
import {Button, Card} from "react-bootstrap";
import ServiceDescription from "./ServiceDescription.jsx";
export default function serviceCard({title, cardImage, description}) {
    //const capmImg = import("../../../../resources/summer_camp_stock.jpg");
    return (
        <Card style={{ width: '28rem' ,margin: '5px'}}>
            <Card.Img style={{marginTop : '4px'}} variant="top"  src={cardImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <ServiceDescription title={title} description={description}/>
            </Card.Body>
        </Card>
    );
}
