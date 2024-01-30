import {useEffect, useState} from "react";
import {map} from "react-bootstrap/ElementChildren";
import EventCard from "../components/EventCard.jsx";
import Loading from "../components/Loading.jsx";
import {Button} from "react-bootstrap";

function EventPage() {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
    useEffect(()=>{

        fetch("api/v1/events")
            .then((res) => res.json()).then((d)=>{
                setEvents(d);
                setLoading(false)
        });
    },[])


    return(<div>
        <h1>Events</h1> <Button href="/new-event">+</Button>

        {events ?
            events.map((event) => (
                <EventCard key={event.id} event={event}/>
            ))
            : <Loading/>}
    </div>)
}

export default EventPage