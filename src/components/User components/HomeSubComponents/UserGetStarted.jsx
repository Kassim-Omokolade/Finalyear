import React from "react";
import "../../../styles/User Styles/GetStarted.css";
import image3 from "../../../assets/images/customer.png";
import { Link } from "react-router-dom";

const UserGetStarted = () => {
  return (
    <div className="user-join-wrapper">
      <div className="user-join">
        <h6>Do you own a home?</h6>
        <h3>Join our partner landlord and agents</h3>
        <p>Earn big in rental income from the best tenants in Nigeria.</p>
        <button>
          <Link to="/properties" className="text-white">
            Get Started
          </Link>
        </button>
      </div>

      <div className="user-join-img">
        <img src={image3} alt="family img" />
      </div>
    </div>
  );
};

export default UserGetStarted;
