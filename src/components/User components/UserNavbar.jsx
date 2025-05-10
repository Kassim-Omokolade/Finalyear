import usernavbar from "../../assets/images/sunkasLogo.png";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import { Button } from "react-bootstrap";
import "../../styles/User Styles/UserNavbar.css";
import UserSideBar from "./UserSideBar";
import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { useGlobalContext } from "../../Hooks/useGlobalContext";

const UserNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { propertyId } = useParams();
  const location = useLocation();
  const { isDark, setLightMode } = useGlobalContext();
  const token = localStorage.getItem("token");
  const redirect = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("token");
    redirect("/")
  }


  return (
    <div
      className={
        location.pathname === `/properties/${propertyId}` ||
        location.pathname === "/inspection" ||
        location.pathname === "/*"
          ? " w-100 position-relative "
          : "bg-transparent UserNavTransparent z-2 position-absolute top-0 w-100 "
      }
      style={
        location.pathname === `/properties/${propertyId}` ||
        location.pathname === "/inspection" ||
        location.pathname === "/*"
          ? { backgroundColor: "#002b5b" }
          : {}
      }
    >
      <div
        className="switch position-absolute border rounded-pill d-lg-flex gap-3 p-2 d-none "
        onClick={setLightMode}
      >
        <BsFillSunFill className={isDark ? "d-none" : "fs-3 text-warning"} />
        <BsFillMoonFill className={isDark ? "fs-3 text-white" : "d-none"} />
      </div>
      {sidebar ? <UserSideBar sidebar={setSidebar} /> : null}
      <header className="usernavheader align-items-center px-lg-5 px-2  py-1 d-flex">
        <div className="LogoWrapper d-flex justify-content-between align-items-center ">
          <Link to="/">
            <img
              src={usernavbar}
              alt="usernavlogo"
              className="usernavlogo"
              style={{
                maxWidth: "180px", // limit the width
                width: "100%", // allow it to scale
                height: "auto", // keep aspect ratio
                objectFit: "contain", // make sure it doesn't stretch or get cropped
                filter: "drop-shadow(1px 1px 2px white)",
              }}
            />
          </Link>

          <GiHamburgerMenu
            className=" text-white fs-4 d-lg-none d-block"
            onClick={() => setSidebar(true)}
          />
        </div>

        <nav className="d-lg-flex  d-none flex-lg-row flex-column align-items-center justify-content-evenly  position-md-absolute top-100 end-0">
          {/* <Container className="d-flex gap-5"> */}

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav" className="w-75 ps-5 "> */}
          <ul className="UserNavLinks d-flex pt-3 align-items-center gap-5 ">
            <li>
              <Link
                to="/"
                className={`nav-link fw-bold  ${
                  location.pathname === "/" ? "active" : "text-white fw-bold"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/properties"
                className={`nav-link fw-bold ${
                  location.pathname === "/properties"
                    ? "active"
                    : "text-white fw-bold "
                }`}
              >
                Properties
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/contact"
                className={`nav-link fw-bold ${
                  location.pathname === "/contact"
                    ? "active"
                    : "text-white fw-bold "
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/inspection" className="text-white fw-bold ">
                Book Now
              </Link>
            </li>
          </ul>
          {token ? (
            <div>
              <button
                className="btn "
                style={{ backgroundColor: "#ffffff", color: "#002b5b" }}
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column ms-xxl-5 flex-lg-row gap-3 align-items-center mt-sm-3">
              <Link to="/signup">
                <button
                  className={
                    location.pathname === `/properties/${propertyId}` ||
                    location.pathname === "/inspection"
                      ? "btn  px-4 py-2"
                      : "btn border px-4 py-2 "
                  }
                  style={{
                    backgroundColor:
                      location.pathname === `/properties/${propertyId}` ||
                      location.pathname === "/inspection"
                        ? "#002B5B"
                        : "",
                  }}
                >
                  Sign Up
                </button>
              </Link>

              <Link to="/login">
                <button
                  className={
                    location.pathname === `/properties/${propertyId}` ||
                    location.pathname === "/inspection"
                      ? "btn border-0 px-5 py-2 "
                      : "btn px-4 py-2"
                  }
                  style={{
                    backgroundColor: "white", // Always dark blue background
                    color: "#002B5B", // Always white text
                  }}
                >
                  Log In
                </button>
              </Link>
            </div>
          )}
          {/* </Navbar.Collapse> */}
          {/* </Container> */}
        </nav>
      </header>
    </div>
  );
};

export default UserNavbar;
