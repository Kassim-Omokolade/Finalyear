import React, { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";
import pic from "../../assets/images/img1.png";
import black from "../../assets/images/black.jpg";

export const AdminForm = () => {
  const [images, setImages] = useState({
    img1: black,
  });

  const handleImage = (id) => {
    let fileInput = document.getElementById(id);
    fileInput.click();
    fileInput.onchange = () => {
      const [file] = fileInput.files;
      setImages((prevState) => {
        return { ...prevState, [id]: file ? URL.createObjectURL(file) : {} };
      });
    };
  };

  return (
    <div className="mt-4 gap-3  admin-form-fill  ">
      <div>
        {" "}
        <div className=" d-sm-block  d-md-flex   gap-2 ">
          <div className=" d-flex  flex-column gap-1 admin-first-form">
            <label>Tags</label>
            <select></select>
          </div>

          <div className=" d-flex  flex-column gap-1 admin-second-form">
            <label>Property Type</label>
            <select></select>
          </div>
        </div>
        <div className=" d-sm-block  d-md-flex   gap-2 mt-3">
          <div className=" d-flex  flex-column gap-1 admin-first-form">
            <label>Title</label>
            <input type="text" />
          </div>

          <div className=" d-flex  flex-column gap-1 admin-second-form">
            <label>Sales Price</label>
            <input type="number" name="" id="" />
          </div>
        </div>
        <div className=" mt-3">
          <div className=" d-flex  flex-column gap-1 admin-third-form">
            <label>Location</label>
            <input type="text" />
          </div>
        </div>
        <div className=" mt-3">
          <div className=" d-flex  flex-column gap-1 admin-fourth-form">
            <label>Description</label>
            <textarea type="text" />
          </div>
        </div>
        <div className=" mt-3">
          <div className=" d-flex  flex-column gap-1 admin-fourth-form">
            <label>Features</label>
            <div className=" p-3 admin-add-features">
              <div className="d-flex flex-wrap  gap-3 justify-content-evenly  align-items-center ">
                {/* 1 */}
                <div className=" position-relative  admin-choose">
                  <input
                    type="number"
                    className="ps-4 ms-1  position-relative"
                  />
                  <div className=" position-absolute admin-bed">
                    <IoBedOutline />
                  </div>
                </div>
                {/* 2 */}
                <div className=" position-relative   admin-choose">
                  <input
                    type="number"
                    className="ps-4 ms-1  position-relative "
                  />
                  <div className=" position-absolute admin-bed">
                    <LuBath />
                  </div>
                </div>
                {/* 3 */}
                <div className=" position-relative  admin-choose">
                  <input
                    type="number"
                    className="ps-4 ms-1  position-relative"
                  />
                  <div className=" position-absolute admin-bed">
                    <IoBedOutline />
                  </div>
                </div>
                {/* 4 */}
                <div className=" position-relative  admin-choose">
                  <input
                    type="number"
                    className="ps-4 ms-1  position-relative"
                  />
                  <div className=" position-absolute admin-bed">
                    <FaCar />
                  </div>
                </div>
                {/* 5 */}
                <div className=" position-relative  admin-choose">
                  <input
                    type="number"
                    className="ps-4 ms-1  position-relative"
                  />
                  <div className=" position-absolute admin-bed">
                    <FaCar />
                  </div>
                </div>
                {/* 6 */}
                <div className=" position-relative  admin-choose">
                  <input
                    type="number"
                    className="ps-4 ms-1  position-relative"
                  />
                  <div className=" position-absolute admin-bed">
                    <FaCar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* this is for property video */}
        <div className=" mt-3">
          <div className=" d-flex  flex-column gap-1 admin-fourth-form">
            <label>Property video</label>

            <div className="p-4 admin-add-video-border">
              <div
                className=" admin-add-new-video"
                onClick={() => handleImage("img1")}
              >
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  id="img1"
                />
                <img src={images.img1} alt="preview" className="" />

                <div className="admin-btn-video">
                  <button
                    onClick={() =>
                      document.querySelector('input[type="file"]').click()
                    }
                  >
                    <span>
                      <MdOutlineCameraAlt />
                    </span>
                  </button>
                  <p>Click to add video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" text-center mt-3 border  border-1 me-3 px-3 py-4"
        style={{
          height: "fit-content",
          width: "fit-content",
          borderRadius: "15px",
        }}
      >
        <form className="  admin-second-form-fill">
          <img src={pic} alt="" />

          <div className=" d-flex  flex-column  text-start ">
            <label htmlFor="">Support In Change</label>
            <input type="text" className="admin-second-form" />
          </div>
          <div className=" d-flex  flex-column  text-start mt-2">
            <label htmlFor="">WhatsApp Contact Details</label>
            <input type="text" className="admin-second-form" />
          </div>
          <div className=" d-flex  flex-column  text-start mt-2">
            <label htmlFor="">Call Contact Details</label>
            <input type="text" className="admin-second-form" />
          </div>
        </form>
      </div>
    </div>
  );
};
