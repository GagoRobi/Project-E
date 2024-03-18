import {Button, CardGroup, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {ItemCard} from "../components/ItemCard.jsx";
import {Link} from "react-router-dom";

export default function WebShop() {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        console.log(localStorage.getItem("token"))
        fetch("api/v1/item/all", {
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then((res)=> res.json()).then((d)=>
            setItemList(d)
        );
    }, []);

    return (
        <>
            <Container>
                <Row xs={1} sm={2} md={3} lg={4} className="me-auto">
              {itemList && itemList.map((item) => <ItemCard key={item.id} item={item}/>)}
            </Row>
            </Container>
        </>
    )
}
