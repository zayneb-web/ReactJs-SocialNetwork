// EventPage.jsx
import React from "react";
import EventForm from "../components/EventForm";
import TopBar from "../components/TopBar";


const EventPage = () => {
    return (
        <div className="flex h-screen">

            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Navbar */}
                <TopBar />

                {/* Main Content */}
                <div className="flex flex-1 overflow-y-auto p-6">
                    {/* Event Form */}
                    <EventForm />
                </div>
            </div>
        </div>
    );
};

export default EventPage;
