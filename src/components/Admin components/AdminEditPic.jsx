import React, { useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import "../../styles/Admin Styles/AdminAddProperty.css";
import black from "../../assets/images/black.jpg";
import pic from "../../assets/images/img1.png" 
import adminEdit1 from "../../assets/images/AdminEdit1.png";
import adminEdit2 from "../../assets/images/AdminEdit2.png";
import adminEdit3 from "../../assets/images/AdminEdit3.png";
import adminEdit4 from "../../assets/images/AdminEdit4.png";

// eslint-disable-next-line react/prop-types
export const AdminEditPic = ({ className }) => {

   const [images, setImages] = useState({
     img1: adminEdit1,
     img2: adminEdit2,
     img3: adminEdit3,
     img4: adminEdit4,
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
    <div className=" d-flex gap-2">
      {/* this is for the picture section */}

      <div className=" admin-add-new-pic" onClick={() => handleImage("img1")}>
        <input
          type="file"
          style={{ display: "none" }}
          // onChange={handlePic}
          accept="image/*"
          id="img1"
        />
        <img src={images.img1} alt="preview" className="" />

        <div className="admin-btn">
          <button
          // onClick={() => document.querySelector('input[type="file"]').click()}
          >
            <span>
              <MdOutlineCameraAlt />
            </span>
          </button>
          <p>Click to add picture</p>
        </div>
      </div>

      <section className="d-flex flex-column gap-2">
        {/* 2 */}
        <div
          className=" admin-add-new-pic2"
          onClick={() => handleImage("img2")}
        >
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            id="img2"
          />
          <img src={images.img2} alt="preview" className="" />

          <div className="admin-btn2">
            <button>
              <span>
                <MdOutlineCameraAlt />
              </span>
            </button>
            <p>Click to add picture</p>
          </div>
        </div>
        {/* 3 */}
        <div
          className=" admin-add-new-pic2"
          onClick={() => handleImage("img3")}
        >
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            id="img3"
          />
          <img src={images.img3} alt="preview" className="" />

          <div className="admin-btn2">
            <button>
              <span>
                <MdOutlineCameraAlt />
              </span>
            </button>
            <p>Click to add picture</p>
          </div>
        </div>

        {/* 4 */}
        <div
          className=" admin-add-new-pic2"
          onClick={() => handleImage("img4")}
        >
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            id="img4"
          />
          <img src={images.img4} alt="preview" className="" />

          <div className="admin-btn2">
            <button>
              <span>
                <MdOutlineCameraAlt />
              </span>
            </button>
            <p>Click to add picture</p>
          </div>
        </div>
      </section>
    </div>
  );
};
