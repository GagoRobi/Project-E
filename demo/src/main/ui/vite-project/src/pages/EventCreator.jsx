import {Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";


export default function EventCreator() {
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [headcount, setHeadcount] = useState(0);
    const [typeList, setTypeList] = useState([]);

    useEffect(() => {
        fetch("api/v1/event-types")
            .then((res) => res.json()).then((data) => {
            setTypeList(data);

        })
    }, []);



    return (

        <div>
            <Card className="mx-lg-5 p-4">
                <Form>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control as="input" placeholder="Title"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Description" onChange={(e) => {
                            setDescription(e.target.value)
                        }}/>
                    </Form.Group>
                    <Form.Label>Type:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option selected={true} disabled={true}>Open to select type</option>
                        {typeList && typeList.map((t) => (<option value="1">{t.name}</option>))}
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control onChange={(e)=>setDate(e.target.value)} as="input"  type={"date"} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Head Count:</Form.Label>
                        <Form.Control onChange={(e)=>setHeadcount(e.target.value)} as="input" min={1} type={"number"} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    )

}

