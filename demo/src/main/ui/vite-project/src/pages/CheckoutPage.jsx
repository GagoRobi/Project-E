import {json, useOutletContext} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";

export default function CheckoutPage () {
    const cart = JSON.parse(localStorage.getItem("cart"));
    //todo fetch based on cart/localstorage
    return (
        <>
            {cart.map((e) => (<Row style={{color : "green"}} id={e.id}><Col>{e.id}</Col><Col>{e.count}</Col></Row>))}
        </>
    )
}
