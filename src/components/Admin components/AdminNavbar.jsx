import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../../styles/Admin Styles/AdminNavbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAdminContext } from "../../adminContext";

const AdminNavbar = () => {
  const {setLocation} = useAdminContext();
  const redirect = useNavigate();
  const area = useLocation();
  const [search, setSearch] = useState('')
  const handleLogOut = () => {
    localStorage.removeItem("token");
    redirect("/admin/login");
  };

  const handleSearch = (e) => {
    e.preventDefault()
    setLocation(search);
  }
  return (
    <div className="py-3 pe-2  pe-lg-5">
      <header className="AdminNavbarContainer d-flex justify-content-between align-items-center">
        <div className="AdminNavRight d-flex gap-5">
          <div>
            {area.pathname === "/admin/properties" ? (
              <form
                className="headerSearchWrapper d-flex align-items-center" 
                onSubmit={handleSearch}
              >
                <input
                  type="text"
                  placeholder="Search Here"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <IoSearch className="headerSearchIcon"   />
              </form>
            ) : (
              <h1 className=" display-6" style={{ color: "#002b5b" }}>
                Welcome Admin
              </h1>
            )}
          </div>
        </div>

        <div className="NavbarAdminInfo d-flex align-items-center gap-lg-5 gap-sm-4 ">
          {/* <button className="bg-success-subtle border-0 py-2 px-3 me-2  rounded">
          <TiThMenu className="text-success"/>
          </button> */}
          <div className="line"></div>
          <div className="AdminNavInfo d-flex align-items-center justify-content-center  gap-2 ">
            <div className="d-flex flex-column justify-content-center  ">
              <p className="fw-bold">Admin Admin</p>
              <p className="fw-light ">Admin</p>
            </div>

            <button
              className="btn "
              style={{ backgroundColor: "#002b5b", color: "#ffffff" }}
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AdminNavbar;
