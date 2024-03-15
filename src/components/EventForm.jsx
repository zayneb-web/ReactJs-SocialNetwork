// EventForm.jsx
import React, { useState } from "react";
import { createEvent } from "../utils/api"; // Updated import statement

const EventForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        location: ""
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createEvent(formData); // Updated function call
            console.log("Event created:", res);
            // Reset form data after successful submission
            setFormData({
                title: "",
                description: "",
                date: "",
                location: ""
            });
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Create Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
                </div>
                <button type="submit" className="inline-flex items-center text-base bg-[#F76566] text-white px-6 py-2.5 mt-2 rounded-full hover:bg-[#f24b5c]">Create Event</button>
            </form>
        </div>
    );
};

export default EventForm;
