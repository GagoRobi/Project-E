import {Button, CardText} from "react-bootstrap";
import {Fragment, useEffect, useState} from "react";
import CheckoutTable from "../components/CheckoutTable.jsx";
import {Link, useNavigate, useOutletContext} from "react-router-dom";

export default function CheckoutPage() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const [idList, setIdList] = useState(cart.map(es => es.id));
    const [itemList, setItemList] = useState(null);
    const navigate = useNavigate();
    const [cartRefreshTrigger, setCartRefreshTrigger] = useOutletContext();

    //todo fetch based on cart/localstorage
    //todo done in navbar but i might check redux first, untill then i might fectch here!

    useEffect(() => {
        fetchItems();
    }, [idList]);

    const fetchItems = async () => {
        const fetchPromises = idList.map(id => fetch(`/api/v1/item/${id}`));
        const responses = await Promise.all(fetchPromises);
        const data = await Promise.all(responses.map(response => response.json()));
        setItemList(data);
    };

    return (
        <>
            <Button style={{marginBottom: "1rem"}} onClick={() => {
                localStorage.removeItem("cart"); setCartRefreshTrigger(cartRefreshTrigger + 1) ; navigate("/")
            }}>delete cart</Button>
            <CheckoutTable props={itemList}/>
            <Link className="btn bg-primary" target="_blank" to="https://simple.hu/simplepay/">Confirm Purchase</Link>
        </>
    )
}
