import {Button, CardGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import {ItemCard} from "../components/ItemCard.jsx";

export default function WebShop() {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        fetch("api/v1/item/all").then((res)=> res.json()).then((d)=> {
            setItemList(d); console.log(d);
        });
    }, []);

    return (
        <>
          <p>
              web-shop</p>
              <Button href="/create/item">+</Button>
            <CardGroup className="me-auto">
              {itemList && itemList.map((item) => <ItemCard key={item.id} item={item}/>)}
            </CardGroup>
        </>
    )
}
