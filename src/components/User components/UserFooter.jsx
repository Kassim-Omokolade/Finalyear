import React from "react";
import "../../styles/User Styles/userfooter.css";

import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const UserFooter = () => {
  return (
    <div className="user-footer-wrapper">
      <div className="user-footer container ">
        <div className="user-footer-about">
          <p>
            Discover, rent, and find your ideal home hassle-free with Sunkas
            Construction Limited. Take control of your rental journey today!
          </p>
          <p>
            <MdLocationOn /> 95 Obasanjo Way, Lekki, Lagos
          </p>
          <p>
            <IoIosCall /> +234 803 313 6313
          </p>
          <p>
            <IoMdMail /> support@rentsunkas.com
          </p>
        </div>

        <div className="user-footer-list d-flex flex-column gap-3">
          <h3>Quick Links</h3>
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/properties" className="text-white">
            Properties
          </Link>
          <Link to="/contact" className="text-white">
            Contact Us
          </Link>
          <Link to="/inspection" className="text-white">
            Book Now
          </Link>
        </div>

        <div>
          <h3>More</h3>
          <Link to="/error">
            <p>Agents</p>
          </Link>
          <Link to="/properties">
            <p>Affordable Houses</p>
          </Link>
          <Link to="/error">
            <p>FAQ's</p>
          </Link>
        </div>

        <div>
          <h3>Popular Search</h3>
          <Link to="/properties">
            <p>Apartment for sale</p>
          </Link>
          <Link to="/properties">
            <p>Apartment for rent</p>
          </Link>
          <Link to="/properties">
            {" "}
            <p>3 bedroom flat</p>
          </Link>
          <Link to="/properties">
            <p>Bungalow</p>
          </Link>
        </div>
      </div>

      <div className="user-footer-policy">
        <div>
          <p>
            &copy; Copyright {new Date().getFullYear()} Sunkas Construction
            Limited{" "}
          </p>
        </div>
        <div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
