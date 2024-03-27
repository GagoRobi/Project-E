import {Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export default function EventCreator() {
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [headcount, setHeadcount] = useState(0);
    const [typeList, setTypeList] = useState([]);
    const [newEvent, setNewEvent] = useState()
    const [link, setLink] = useState()
    const navigate = useNavigate();
    useEffect(() => {
        fetch("api/v1/event-types", {
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then((res) => res.json()).then((data) => {
            setTypeList(data);
        })
    }, []);
    function saveEvent(){
        fetch("api/v1/events/create" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
                title,
                type,
                description,
                date,
                headcount,
                link
            })
        }).then(()=>navigate("/events"))
        console.log(newEvent)
    }


    return (

        <div >
            <Card className="mx-lg-5 p-4">
                <Form>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control as="input" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Description" onChange={(e) => {
                            setDescription(e.target.value)
                        }}/>
                    </Form.Group>
                    <Form.Label>Type:</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e)=>{
                        setType({"id" : e.target.value, "name" : e.target.selectedOptions[0].innerText})}}>
                        <option selected={true} disabled={true}>Open to select type</option>
                        {typeList && typeList.map((t) => (<option key={t.id} value={t.id}>{t.name}</option>))}
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control onChange={(e)=>setDate(e.target.value)} as="input"  type={"date"} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCount">
                        <Form.Label>Head Count:</Form.Label>
                        <Form.Control onChange={(e)=>setHeadcount(e.target.value)} as="input" min={1} type={"number"} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCount">
                        <Form.Label>Calendar Link:</Form.Label>
                        <Form.Control onChange={(e) => setLink(e.target.value)} as="input" min={1}/>
                    </Form.Group>

                    <Button variant="primary" onClick={(e)=>{
                        e.preventDefault();
                        saveEvent();
                    }} >
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    )

}

