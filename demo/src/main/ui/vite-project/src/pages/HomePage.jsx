import {Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Image, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import face from '../../../../resources/service-images/faceshot.jpg'

function HomePage() {

    return (
        <>
            <Card className="p-1">
                <CardHeader><CardTitle>Hello there, wonderful souls!</CardTitle> </CardHeader>
                <br/>
                <CardSubtitle>Step into the serene embrace of our digital haven.</CardSubtitle>
                <CardBody>
                    <Image src={face} style={{width: '45%', float: 'left', margin: '15px'}}/>
                    <CardText style={{ padding: '0 5%', textAlign: 'justify'}}>

                        I'm Emily, and I'm absolutely delighted to welcome you here. Amidst the whirlwind of daily life,
                        we've carved out a peaceful oasis where you can find respite and renewal.<br/>

                        As a passionate advocate for holistic well-being, my mission is to nurture growth, healing, and
                        connection. Through a variety of offerings including group and solo therapy sessions, enriching
                        kid summer camps, empowering women circles, and personalized coaching, I aim to empower each
                        individual on their unique journey of self-discovery and empowerment.

                        This website isn't just a virtual space—it's a sanctuary for the soul. It's a place where you
                        can explore, learn, and embark on a path of self-care and transformation. Whether you're seeking
                        solace, support, or simply a sense of belonging, you'll find it here.

                        But our journey doesn't end with me—it's about all of us. It's about coming together as a
                        community, lifting each other up, and creating a ripple effect of positivity and growth. So,
                        take a moment to explore our offerings, and if something speaks to your heart, don't hesitate to
                        reach out. Whether you're ready to take the next step on your journey or simply curious to learn
                        more, I'm here to support you every step of the way.

                        Thank you for joining us on this extraordinary adventure. Together, let's embark on a journey of
                        healing and transformation.
                    </CardText>


                </CardBody>

            </Card>
            {/*<div className="calendly-inline-widget" data-url="https://calendly.com/gagodev" style={{minWidth:320, height:720}}></div>*/}
            {/*<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>*/}

        </>
    )
}

export default HomePage
