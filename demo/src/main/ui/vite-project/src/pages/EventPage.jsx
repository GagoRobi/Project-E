import {useState} from "react";
import {map} from "react-bootstrap/ElementChildren";

function EventPage() {

    const [events, setEvents] = useState(["event1","event2"]);

    return(<div>
        <h1>Events</h1>
        {events.length > 0?
            events.map((event) => (
                <div>
                    <p>{event}</p>
                </div>
            )): <div>no</div>}
    </div>)
}
export default EventPage