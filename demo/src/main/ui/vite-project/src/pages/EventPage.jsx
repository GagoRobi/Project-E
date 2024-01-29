import {useState} from "react";
import {map} from "react-bootstrap/ElementChildren";
import EventCard from "../components/EventCard.jsx";

function EventPage() {

    const [events, setEvents] = useState(["event1","event2"]);

    return(<div>
        <h1>Events</h1>
        <EventCard event={{
            "title": "Test_Post:man",
            "type": "EVENT_TYPE_1",
            "description": "My first test input from Postman.",
            "date": "2024-01-29",
            "headcount": 12
        }}/>

        {events.length > 0 ?
            events.map((event) => (
                <div>
                    <p>{event}</p>
                </div>
            ))
            : <div>no</div>}
    </div>)
}

export default EventPage