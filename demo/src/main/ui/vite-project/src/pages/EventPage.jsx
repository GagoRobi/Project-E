import {useEffect, useState} from "react";
import {map} from "react-bootstrap/ElementChildren";
import EventCard from "../components/EventCard.jsx";
import Loading from "../components/Loading.jsx";
const fetchEvents = () => {

    return fetch("http://localhost:8080/api/v1/events")
        .then((res) => res.json()).then((d)=>console.log(d));
}

function EventPage() {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
    useEffect(()=>{

        fetch("http://localhost:8080/api/v1/events")
            .then((res) => res.json()).then((d)=>{
                setEvents(d);
                console.log(d)
                setLoading(false)
        });
        console.log(events)

    },[])


    return(<div>
        <h1>Events</h1>
        {/*<EventCard event={{*/}
        {/*    "title": "Test_Post:man",*/}
        {/*    "type": "EVENT_TYPE_1",*/}
        {/*    "description": "My first test input from Postman.",*/}
        {/*    "date": "2024-01-29",*/}
        {/*    "headcount": 12*/}
        {/*}}/>*/}


        {events ?
            events.map((event) => (
                <EventCard event={event}/>
            ))
            : <Loading/>}
    </div>)
}

export default EventPage