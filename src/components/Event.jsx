import React, { useEffect, useState } from "react";
import { createEvent, getEvents, deleteEvent } from "../utils/api"; // Updated import statements

const Event = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        location: ""
    });

    useEffect(() => {
        setLoading(true);
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await getEvents(); // Updated function call
            if (Array.isArray(res)) {
                setEvents(res);
            } else {
                console.error("Invalid response format:", res);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createEvent(formData); // Updated function call
            setEvents([...events, res]);
            // Reset form data after successful submission
            setFormData({
                title: "",
                description: "",
                date: "",
                location: ""
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await deleteEvent(eventId); // Updated function call
            const filteredEvents = events.filter((event) => event._id !== eventId);
            setEvents(filteredEvents);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit}>
                {/* Form inputs */}
            </form>

            {/* Render events */}
            {loading ? (
                <p>Loading events...</p>
            ) : (
                events.map((event) => (
                    <div key={event._id}>
                        {/* Render event details */}
                        <button onClick={() => handleDeleteEvent(event._id)}>Delete Event</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Event;
