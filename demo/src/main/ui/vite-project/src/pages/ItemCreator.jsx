import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ItemCreator() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    function handleSave() {
        fetch("/api/v1/item/create",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    price,
                    description,
                    pictureUrl : link
                })
            }).then((response)=> {
            if (response.ok){
                navigate("/shop");
            }else{
                console.log(response.status)
            }
        })

    }


    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text"
                                  placeholder="Enter name of item"/>
                </Form.Group>
                <Form.Group className="mb-3" style={{minWidth: 75, maxWidth: 150, margin: "auto"}}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control defaultValue={0} onChange={(e) => setPrice(e.target.value)} type="number"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3}
                                  placeholder="Additional info about the product."/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control onChange={(e) => setLink(e.target.value)} type="text"
                                  placeholder="https://picture.com"/>
                </Form.Group>
                <Button onClick={(e) => {
                    e.preventDefault();
                    handleSave()
                }}>Save</Button>
            </Form>
        </>
    )
}
