import {useOutletContext} from "react-router-dom";
import {Card} from "react-bootstrap";

export default function CheckoutPage () {
    const [notUsed1, notUsed2, cart, setCart] = useOutletContext();

    return (
        <>
            {cart?.map(el => <Card>{el}</Card>)}
        </>
    )
}
