import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../redux/userSlice";

const TopBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleTheme = () => {
    // Your theme toggle logic
  };

  return (
    <div className="topbar flex items-center justify-between py-3 md:py-6 px-4 bg-primary">
      <Link to="/" className="flex items-center">
        <div className="p-2 bg-[#F76566] rounded text-white">
          {/* Icon component */}
        </div>
        <span className="text-xl md:text-2xl text-[#F76566] font-semibold">
          Better Call Us
        </span>
      </Link>

      <div className="flex gap-4 items-center text-md md:text-xl">
        <button onClick={handleTheme}>
          {/* Theme toggle icon */}
        </button>
        <div className="hidden lg:flex">
          {/* Notifications icon */}
        </div>

        <div>
          <button onClick={() => dispatch(Logout())} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
