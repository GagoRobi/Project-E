import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ServiceCard from "../components/ServiceCard.jsx"
import campImg from "../../../../resources/service-images/summer_camp_stock.jpg";
import meditationImg from "../../../../resources/service-images/meditation.jpg";
import drawImg from "../../../../resources/service-images/drawing.jpg";
import womenCircleImg from "../../../../resources/service-images/Sacred-Womens-circle.jpeg";
export default function Services() {

    //how to give mappedsa service cards different pictures?

    return (
        <>
            <Container fluid={"md"} >
                <Row className="justify-content-center">
                    <ServiceCard
                        title = "Kid Summer Camp"
                        cardImage = {campImg}
                        description={"One week long summer camp for kids between the ages 5 and 12. Daily activities involve art therapy where we tune in on a feeling and work on it through arts and crafts. The kids will also have the opportunity for taking part in a pool party, and various outdoor activities."}
                    />
                    <ServiceCard
                        title = "Group meditation"
                        cardImage = {meditationImg}
                        description = {"Join our group meditation sessions to experience the power of collective serenity. Let's synchronize our energies and embark on a journey of inner peace together. Together, we'll create a harmonious space where tranquility flows freely, guiding each other towards a deeper state of mindfulness and presence."}
                    /><ServiceCard
                    title = "Art Therapy"
                    cardImage = {drawImg}
                    description={"Our art therapy for kids is a colorful journey of self-expression and discovery. Through creative exploration, children unlock their inner worlds and express their thoughts and emotions in a safe, supportive environment. Guided by skilled facilitators, each session fosters confidence, resilience, and joy, empowering young minds to flourish."}
                />
                    <ServiceCard
                        title = "Women Circles"
                        cardImage = {womenCircleImg}
                        description={"Step into our Women Circles and embrace the power of sisterhood. These intimate gatherings offer a sacred space for women to connect, share, and support one another on their journeys. Through meaningful conversations, rituals, and activities, we cultivate deeper connections, empowerment, and growth, celebrating the strength and wisdom within each of us."}
                    />
                </Row>
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        1 of 1*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        1 of 1*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Container>
        </>
    )
}
