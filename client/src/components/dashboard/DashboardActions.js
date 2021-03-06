import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fas fa-clock text-primary" /> Add Recently Played Games
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-star text-primary" /> Add Favorite Games
      </Link>
    </div>
  );
};

export default DashboardActions;
