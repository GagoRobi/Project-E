import {Button, Card, CardText, Col, Row} from "react-bootstrap";
import {useState} from "react";
import CenteredModal from "./CenteredModal.jsx";
import {useOutletContext} from "react-router-dom";

export function ItemCard({item}) {
    const {name, price, description, pictureUrl} = item;
    //const shortDescription = description.substring(0,250);
    const [isShort, setIsShort] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [itemCount, setItemCount] = useState(0);
    const [cartRefreshTrigger, setCartRefreshTrigger] = useOutletContext();

    function addItemToCart() {
        if (itemCount > 0 && itemCount < 51) {
            const cartItem = {"id": item.id, "count": parseInt(itemCount), "price" : parseInt(price)};
            if (localStorage.getItem("cart") === null) {
                localStorage.setItem("cart", JSON.stringify([cartItem]))
            } else {
                addMoreItemToCart()
            }
            setCartRefreshTrigger(cartRefreshTrigger + 1);
        }
    }

    function addMoreItemToCart() {
        //this method checks if there's already item in the cart with the same id, if so
        const arrayOfMatchingItem = JSON.parse(localStorage.getItem("cart")).filter((e) => e.id === item.id);
        let count = parseInt(itemCount);
        let id = item.id;
        if (arrayOfMatchingItem.length > 0) {
            count += arrayOfMatchingItem[0].count;
            id = arrayOfMatchingItem[0].id;

        }
        const restArray = JSON.parse(localStorage.getItem("cart")).filter((e) => e.id !== item.id);
        if (restArray.length > 0) {
            //console.log([...restArray,{id, count}])
            localStorage.setItem("cart", JSON.stringify([...restArray, {id, count, price}]));
        } else {
            localStorage.setItem("cart", JSON.stringify([{id, count, price}]));
        }
    }

    return (
        <Col style={{marginBottom: "0.5rem"}}>
            <Card className="m-1 pointing"
                  style={{position: "relative", height: '100%', backgroundColor: 'rgba(241,255,234,0.91)'}}>
                <Card.Img onClick={() => setModalShow(true)} style={{height: '12rem'}} variant="top" src={pictureUrl}/>
                <Card.Body onClick={() => setModalShow(true)} className="mb-2">
                    <Card.Title>{name}</Card.Title>
                    {description.length < 250 ? <Card.Text>{description}</Card.Text>
                        : <div><Card.Text>{description.substring(0, 80)} ...</Card.Text></div>}


                </Card.Body>
                <Card.Footer style={{paddingRight: 0.1, paddingLeft: "0.1rem"}}>
                    <Card.Text>
                        {price} HUF
                    </Card.Text>
                    <Card.Footer style={{padding: 0}}>
                        {/*<Button onClick={(e) => {*/}
                        {/*    e.preventDefault();*/}
                        {/*    addItemToCart()*/}
                        {/*}} className="p1" style={{position: "absolute", margin: "auto", right: 0, left: 0, bottom: 0}}*/}
                        {/*        variant="primary">Add to Cart</Button>*/}
                        <Row>
                            <Col><Button onClick={(e) => {
                                e.preventDefault();
                                addItemToCart()
                            }}
                                         variant="primary">Add to Cart</Button></Col>
                            <Col><input placeholder={0} min={1} max={50} type="number"
                                        style={{width: "3rem", alignSelf: "center"}} onChange={(e) => {
                                setItemCount(e.target.value)
                            }}/><CardText>max 50</CardText></Col>
                        </Row>
                    </Card.Footer>
                </Card.Footer>
            </Card>
            <CenteredModal
                item={item}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Col>
    );
}
