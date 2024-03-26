import React, { useState, useEffect } from 'react';
import { IconButton, Badge } from "@mui/material";
import { MdMail } from "react-icons/md"; 
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; // Import useSelector hook from react-redux

const ChatNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //const [badgeCount, setBadgeCount] = useState(0); // State variable to track badge count
  const notification = useSelector((state) => state.chat.notification); // Access notification from Redux state
  const badgeCount = useSelector((state) => state.chat.badgeCount);
  const lastMessage = useSelector((state) => state.chat.messages[state.chat.messages.length - 1]);
  
  useEffect(() => {
    // Update badge count when notification is received
   
  }, [notification]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <button onClick={toggleDropdown}>
        <Badge badgeContent={badgeCount} color="error">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
               </svg>
        </Badge>
      </button>

      {dropdownOpen && (
        <>
          <div
            onClick={toggleDropdown}
            className="fixed inset-0 h-full w-full z-10"
          ></div>

          <div className="absolute right-0 mt-2 bg-gray-100 bg-primary rounded-md shadow-lg overflow-hidden z-20" style={{ width: '20rem' }}>
            <div className="py-2">
              <a href="#" className="flex items-center px-4 py-3  hover:bg-bgColor bg-primary -mx-2">
                <img className="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold">Sara Salah</span> replied on the <span className="font-bold text-blue-500">Upload Image</span> article. 2m
                </p>
              </a>
              <a href="#" className="flex items-center px-4 py-3  hover:bg-bgColor bg-primary -mx-2">
                <img className="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold">Sara Salah</span> replied on the <span className="font-bold text-blue-500">Upload Image</span> article. 2m
                </p>
              </a>
              {/* Add other notifications here */}
            </div>
            <Link to="/chat" className="block bg-gray-800 text-white text-center font-bold py-2">See all messages</Link>
          </div>
        </>
      )}
    </>
  );
};

export default ChatNotification;
