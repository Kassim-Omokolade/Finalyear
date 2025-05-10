import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./../../assets/images/SunkasLogo.png";
import "../../styles/Admin Styles/AdminSideBar.css";
import AllProp from "./../../assets/images/allprop.png";
import Addnew from "./../../assets/images/addnew.png";
import Dashboard from "./../../assets/images/dashboard.png";
// import { MdArrowForwardIos } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";


const AdminSideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive]= useState('')
  const location = useLocation()
  console.log(location);
  const paths = {
    dashboard: '/admin/dashboard',
    allprops: '/admin/properties',
    addnew : '/admin/add',
    inspection: '/admin/inspection'
  }

  const addActiveClass = ()=>{
    if(location.pathname === paths.dashboard){
      setActive(true)
      return 'AdminActiveClass'
    }else if(location.pathname === paths.allprops){

    }
  }

  const OpenSideBar = () => {
    setSidebarOpen(true)
  }

  const CloseSideBar = () => {
    setSidebarOpen(false)
  }

  

  return (
    <>
      <button
        className=" arrow-right d-lg-none bg-success-subtle border-0 p-2 rounded align-items-center mt-4 ms-1"
        onClick={OpenSideBar}
      >
        <TiThMenu className=" fs-4 text-success " />
      </button>
      <div
        className={
          sidebarOpen
            ? "slideIn AdminSidebarWrapper d-flex flex-column"
            : "AdminSidebarWrapper d-flex flex-column"
        }
      >
        <div>
          <img
            src={Logo}
            alt="logo"
            className="AdminNavLogo"
            style={{ height: "100px", width: "200px"}}
          />

          <button
            className="d-lg-none bg-success-subtle border-0 p-2 rounded"
            onClick={CloseSideBar}
          >
            <IoClose className=" fs-4 text-success " />
          </button>
        </div>

        <div className="AdminSideBarLinks d-flex flex-column align-items-center justify-content-center ">
          <Link
            to="/admin/dashboard"
            className={
              location.pathname === "/admin/dashboard"
                ? "d-flex flex-column align-items-center justify-content-center AdminActiveClass"
                : "d-flex flex-column align-items-center justify-content-center "
            }
          >
            <img
              src={Dashboard}
              alt="daboard"
          
            />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/properties"
            className={
              location.pathname === "/admin/properties"
                ? "d-flex flex-column align-items-center justify-content-center AdminActiveClass"
                : "d-flex flex-column align-items-center justify-content-center "
            }
          >
            <img src={AllProp} alt="allprop" />
            <span>All Properties</span>
          </Link>
          <Link
            to="/admin/add"
            className={
              location.pathname === "/admin/add"
                ? "d-flex flex-column align-items-center justify-content-center AdminActiveClass"
                : "d-flex flex-column align-items-center justify-content-center "
            }
          >
            <img src={Addnew} alt="daboard" />
            <span>Add New Property</span>
          </Link>
          <Link
            to="/admin/inspection"
            className={
              location.pathname === "/admin/inspection"
                ? "d-flex flex-column align-items-center justify-content-center AdminActiveClass"
                : "d-flex flex-column align-items-center justify-content-center "
            }
          >
            <img src={Addnew} alt="daboard" />
            <span>Inspection History</span>
          </Link>
        </div>

        <div>
          <p className="text-secondary text-center">
            Copyright &copy; {new Date().getFullYear()} Sunkas Construction
            Limited
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
