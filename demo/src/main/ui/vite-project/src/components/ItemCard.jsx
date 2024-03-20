import {Button, Card, CardFooter, CardText, Col} from "react-bootstrap";
import {useState} from "react";
import {Link, useOutletContext} from "react-router-dom";
import CenteredModal from "./CenteredModal.jsx";

export function ItemCard({item}) {
    const {name, price, description, pictureUrl} = item;
    //const shortDescription = description.substring(0,250);
    const [isShort, setIsShort] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [notUsed1, notUsed2, cart, setCart] = useOutletContext();

    function addItemToCart() {
        console.log(cart);
        if(cart.length < 1){
            sessionStorage.setItem("cart",[{name, price, description, pictureUrl}]);
            console.log("asd")
            //setCart([item]);
        }else{
            //setCart([...cart,item]);
            console.log("asd2")
            sessionStorage.setItem("cart",[sessionStorage.getItem("cart"),item]);
            console.log(sessionStorage.getItem("cart")[0])
        }
    }

    return (
        <Col>
            <Card className="m-1 pointing"
                  style={{position: "relative", height: '100%', backgroundColor: 'rgba(241,255,234,0.91)'}}>
                <Card.Img onClick={() => setModalShow(true)} style={{height: '12rem'}} variant="top" src={pictureUrl}/>
                <Card.Body onClick={() => setModalShow(true)} className="mb-2">
                    <Card.Title>{name}</Card.Title>
                    {description.length < 250 ? <Card.Text>{description}</Card.Text>
                        : <div><Card.Text>{description.substring(0, 100)}</Card.Text></div>}
                    <Card.Text>
                        {price} HUF
                    </Card.Text>
                </Card.Body>
                <CardFooter>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        addItemToCart()
                    }} className="p1" style={{position: "absolute", margin: "auto", right: 0, left: 0, bottom: 0}}
                            variant="primary">Add to Cart</Button>
                </CardFooter>
            </Card>
            <CenteredModal
                item={item}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Col>
    );
}
