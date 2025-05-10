import React from "react";
import woods from "../../assets/images/unsplash_RFDP7_80v5A.png";
import hero from "../../assets/images/img6.png";
import house from "../../assets/images/allprop.png";
import "../../styles/Admin Styles/AdminPropertyDetails.css";
import AdminLayout from "../../components/Admin components/AdminLayout";
import { IoCaretBack } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import profile from "../../assets/images/Ellipse 10.png";
import { MdOutlineBedroomChild } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { BiSolidCarGarage } from "react-icons/bi";
import { IoSquareOutline } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import AdminPropertyC from "../../components/Admin components/AdminPropertyDetailsC";

const AdminPropertyDetails = () => {
  const videoUrl =
    "https://res.cloudinary.com/dlb8nbz13/video/upload/c_scale,h_390,q_91,w_618/v1706177257/WhatsApp_Video_2024-01-25_at_11.05.54_eb4762c7_paf2hg.mp4";
  return (
    <div className="propertyDetails">
      <AdminLayout>
        <AdminPropertyC />
      </AdminLayout>
    </div>
  );
};

export default AdminPropertyDetails;
