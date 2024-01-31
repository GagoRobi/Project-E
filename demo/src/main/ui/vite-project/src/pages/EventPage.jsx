import {useEffect, useState} from "react";
import {map} from "react-bootstrap/ElementChildren";
import EventCard from "../components/EventCard.jsx";
import Loading from "../components/Loading.jsx";
import {Button} from "react-bootstrap";

function EventPage() {
    //const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
    const [reRender, setRerender] = useState(0)
    useEffect(()=>{
        getEvents();

    },[])
    function getEvents(){
        fetch("api/v1/events")
            .then((res) => res.json()).then((d)=>{
            setEvents(d);
        });
    }
    function handleDeletion(id){
        fetch("/api/v1/events/delete",{
            method: "DELETE",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(id)})
            setEvents([...events.filter((e)=> e.id !== id)])
    }

    return(<div>
        <h1>Events</h1> <Button href="/new-event">+</Button>

        {events ?
            events.map((event) => (
                <EventCard key={event.id} event={event} onDelete={()=>handleDeletion(event.id)}/>
            ))
            : <Loading/>}
    </div>)
}

export default EventPage