import React, {useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export function EvenTypeCreator() {
const [evenTypeName, setEventTypeName] = useState("");
const [eventList , setEventList] = useState([]);
const [deleteId, setDeleteId] = useState(null);
const [delCount, setDelCount] = useState(0);
async function handleSubmit(){
    const response = await fetch('https://project-e-service.onrender.com/api/v1/event-types/create',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`
        },
        body: evenTypeName
    })
    const data = await response.json();
    console.log(data);
}
    async function handleDeletion(){
        const response = await fetch('https://project-e-service.onrender.com/api/v1/event-types/delete',{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(deleteId)
        })
        const data = await response.json();
        console.log(data);
        setDelCount(delCount +1);
    }

const fetchEvents = async () => {
    const response = await fetch('https://project-e-service.onrender.com/api/v1/event-types')
    const data = await response.json();
    setEventList(data);
}
    useEffect(() => {
        fetchEvents();
    }, [delCount]);


    return (
        <>
            <Card>
                <Form>
                    <Form.Group className="mb-3 p-3"  controlId="event-type">
                        <Form.Label>Create Event Type:</Form.Label>
                        <Form.Control type="text" placeholder="type1" onChange={(e)=> setEventTypeName(e.target.value)}/>
                    </Form.Group>
                    <Button onClick={(e)=> {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                        Create Type
                    </Button>
                </Form>
            </Card>
            <Card style={{margin: '10px 0'}}>
                <Form >
                    <Form.Label>Delete Event Type:</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e)=>{setDeleteId(e.target.selectedOptions[0].id)}} >
                        <option selected={true} disabled={true}>Open this select menu</option>
                        {eventList?.map((element) => {return (<option key={element.id} id={element.id}>{element.name}</option>)})}
                    </Form.Select>
                    <Button onClick={(e)=> {
                        handleDeletion()

                    }}>
                        Delete type
                    </Button>
                </Form>

            </Card>
        </>
    )
}
