import React, { useEffect, useState } from "react";
import "../../styles/Admin Styles/AdminPropertyDetails.css";
import { VscTriangleLeft } from "react-icons/vsc";
import { PiHouseThin } from "react-icons/pi";
import { RiRectangleLine } from "react-icons/ri";
import { BiSolidCarGarage } from "react-icons/bi";
import { LiaBedSolid } from "react-icons/lia";
import { FaShower } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import {
  MdOutlineFamilyRestroom,
  MdOutlineInvertColorsOff,
} from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { BsPlayCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import Loading from "../Loading";
import axios from "axios";
import { FaNetworkWired } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatPrice } from "../../utils/helpers";

const AdminPropertyDetailsComponent = () => {
  const redirect = useNavigate();
  const { propertyId } = useParams();
  const { Base_Url } = useGlobalContext();
  const [property, setProperty] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = `${Base_Url}/property/${propertyId}`;
  console.log(url);

  const getProperty = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setProperty(data.property);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, [propertyId]);

  if (isLoading) {
    return <Loading />;
  }

  const handleSold = async () => {
    try {
      const { data } = await axios.patch(url, { propertyStatus: "sold" });
      if (data.success) {
        toast.success("Property status updated");
      } else {
        toast.error("Error occured while updating property status");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(url);

      if (data.success) {
        redirect("/admin/dashboard");
      } else {
        toast.error("Error occurred while deleting property");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-lg-2 p-3 w-100">
        <ToastContainer />
        <div className="d-flex flex-md-row flex-column-reverse justify-content-between py-3">
          <div className="d-flex gap-2 fs-4 align-items-center">
            <Link to="/admin/properties">
              <VscTriangleLeft className=" triangle-icon" />
            </Link>
            <h2 className="mt-2">Property Details</h2>
          </div>

          <div>
            <Link to="/admin/dashboard">
              <PiHouseThin /> Home
            </Link>

            <Link to="/admin/properties"> / Properties</Link>

            <Link> / Property Details</Link>
          </div>
        </div>

        <div className="d-flex flex-md-row flex-column justify-content-between py-3">
          <div>
            <h3 className="fs-5 fw-bold ">{property.title}</h3>
            <p className="fs-5 text-secondary">{property.location}</p>
          </div>

          <div>
            <Link
              to={`/admin/edit/${propertyId}`}
              disabled
              onClick={(e) => e.preventDefault()}
              style={{ cursor: "not-allowed" }}
            >
              {" "}
              <button
                className="btn  text-white fw-semibold me-2"
                disabled
                style={{
                  cursor: "not-allowed",
                  backgroundColor: "#002b5b",
                  border: "none",
                }}
              >
                Edit
              </button>{" "}
            </Link>
            <button
              className="btn  fw-semibold "
              style={{
                border: "1px solid #002b5b",
                color: "#002b5b",
              }}
              onClick={handleSold}
            >
              Unlist Property
            </button>
          </div>
        </div>

        <div className="d-flex flex-xxl-row flex-column  gap-3 ">
          <div className="flex-grow-1">
            <img
              src={property.media.images[0]}
              alt=""
              className="object-fit-cover rounded-3"
              style={{ height: "605px" }}
            />
          </div>

          <div className="d-flex w-100 flex-column gap-3 align-items-stretch flex-grow-0 h-100">
            <img
              src={property.media.images[1]}
              alt=""
              className="w-100 rounded-3"
              style={{ height: "11.9375rem", objectFit: "cover" }}
            />
            <img
              src={property.media.images[2]}
              alt=""
              className="w-100 rounded-3"
              style={{ height: "11.9375rem", objectFit: "cover" }}
            />
            <img
              src={property.media.images[3]}
              alt=""
              className="w-100 rounded-3"
              style={{ height: "11.9375rem", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="py-3 d-flex flex-xxl-row flex-column gap-3">
          <div className="AdminPdetails">
            <div>
              <div className="d-flex gap-3">
                <p
                  className="py-2 px-4 rounded-pill  fw-semibold fs-4"
                  style={{ backgroundColor: "#002b5b", color: "whitesmoke" }}
                >
                  <FaNetworkWired /> {property.tags}
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-between ">
              <div>
                <h2>{property.title}</h2>{" "}
                <p className="text-secondary">
                  <IoLocationSharp /> {property.location}
                </p>
              </div>
              <div>
                <p className="text-secondary">Sales Price</p>
                <h3 className="fw-bold fs-4 difft">
                  {formatPrice(property.price)}
                </h3>
              </div>
            </div>

            <div className="border border-black border-2 p-3 rounded-3">
              <p className="fw-bold">Description</p>
              <p className="text-secondary">{property.description}</p>
            </div>
            <div className="border border-black border-2 p-3 rounded-3 mt-4">
              <p className="fw-bold">Features</p>
              <ul className="d-flex gap-3 flex-wrap ps-0 ">
                <li className="text-secondary fs-5">
                  <LiaBedSolid /> {property.bedroom} Bedrooms
                </li>
                <li className="text-secondary fs-5">
                  <FaShower /> {property.bathrooms} Bathrooms
                </li>
                {property.garage && (
                  <li className="text-secondary fs-5">
                    <BiSolidCarGarage /> garage
                  </li>
                )}
                <li className="text-secondary fs-5">
                  <RiRectangleLine /> {property.squareFeet} Square Feet
                </li>
              </ul>
            </div>
            <div className="border border-black border-2 p-4 rounded-3 mt-4">
              <p className="fw-bold fs-4">Property Video</p>

              <ReactPlayer
                url={property.media.video}
                controls={true}
                width={`100%`}
              />
            </div>
          </div>

          <div className="OtherOptions d-flex flex-xxl-column flex-md-row gap-3 ">
            <div className="d-flex w-100 flex-column justify-content-center align-items-center gap-2 border border-2 border-black p-3 rounded-4">
              <img
                className="avatar"
                src={property.salesSupport.avatar}
                alt=""
              />
              <h2 className="text-center fs-4">{property.salesSupport.name}</h2>
              <p className="text-secondary">Sales Support</p>
              <button className="btn bg-black text-white fw-semibold fs-6">
                Message:{property.salesSupport.phoneNumber}
              </button>
              <button
                className="btn  fw-semibold fs-5"
                style={{ backgroundColor: "#002b5b", color: "white" }}
              >
                Call:{property.salesSupport.whatsappNumber}
              </button>
            </div>

            <div className="d-flex w-100 flex-column justify-content-center align-items-center gap-2 border border-2 border-black p-3 rounded-4 ">
              <h2 className="text-center fs-4">
                Old Property? Would you like to delete this property or mark as
                sold?
              </h2>
              <button
                className="btn  fw-semibold fs-5 "
                style={{ backgroundColor: "#002b5b", color: "white" }}
                onClick={handleSold}
              >
                Mark As Sold
              </button>
              <button
                className="btn fw-semibold"
                style={{
                  border: "1px solid #002b5b",
                  color: "#002b5b",
                }}
                onClick={handleDelete}
              >
                Delete Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPropertyDetailsComponent;
