import React from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from '../../Hooks/useGlobalContext';

const UserSideBar = ({sidebar}) => {
  const location = useLocation()
  const redirect = useNavigate()
  const {isDark, setLightMode} = useGlobalContext()
  const token = localStorage.getItem("token");
  const handleLogOut = () => {
    localStorage.removeItem("token");
    redirect("/")
  }

  return (
    <div className="UserSidebar position-absolute vh-100 top-0 end-0 z-3 bg-white px-2 py-4  border shadow-lg">
      <div className="d-flex flex-column align-items-start gap-2 justify-content-between position-md-absolute top-100 end-0">
        {/* <Container className="d-flex gap-5"> */}

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav" className="w-75 ps-5 "> */}
        <ul className=" d-flex flex-column gap-5">
          <li>
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "text-success" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/properties"
              className={
                location.pathname === "/properties"
                  ? "text-success  "
                  : "text-dark "
              }
            >
              Properties
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/contact"
              className={
                location.pathname === "/contact" ? "text-success" : "text-dark"
              }
            >
              Contact Us
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/inspection"
              className={`nav-link fw-bold ${
                location.pathname === "/inspection"
                  ? "active"
                  : "text-white fw-bold"
              }`}
            >
              Book Now
            </Link>
          </li>
        </ul>
        <hr />

        {token ? (
          <div>
            <button
              className="btn "
              style={{ backgroundColor: "#002b5b", color: "#ffffff" }}
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <button className=" btn border mb-2 signup-btn text-white px-5 py-2">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="btn bg-white border border-black  px-5 py-2 login-btn ">
                Log In
              </button>
            </Link>
          </div>
        )}
        {/* </Navbar.Collapse> */}
        {/* </Container> */}
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center gap-3">
        <IoClose
          className="fs-3  "
          style={{ color: "#002B5B" }}
          onClick={() => sidebar(false)}
        />
        <div
          className="border rounded-pill d-lg-flex gap-3 p-2 "
          onClick={setLightMode}
        >
          <BsFillSunFill className={isDark ? "d-none" : "fs-3 text-warning"} />
          <BsFillMoonFill className={isDark ? "fs-3 text-white" : "d-none"} />
        </div>
      </div>
    </div>
  );
}

export default UserSideBar