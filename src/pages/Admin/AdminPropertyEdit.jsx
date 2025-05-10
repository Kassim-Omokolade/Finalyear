import AdminLayout from "../../components/Admin components/AdminLayout";

import { Link } from "react-router-dom";
import "../../styles/Admin Styles/AdminAddProperty.css";

// import { AdminAddPic } from "../../components/Admin components/AdminAddPic";
// import { AdminForm } from "../../components/Admin components/AdminForm";
// import { IoMdArrowDropleft } from "react-icons/io";

// import { AdminEditPic } from "../../components/Admin components/AdminEditPic";
// import { AdminEditForm } from "../../components/Admin components/AdminEditForm";
import { MdOutlineCameraAlt } from "react-icons/md";
import adminEdit1 from "../../assets/images/AdminEdit1.png";
import adminEdit2 from "../../assets/images/AdminEdit2.png";
import adminEdit3 from "../../assets/images/AdminEdit3.png";
import adminEdit4 from "../../assets/images/AdminEdit4.png";
import { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import ReactPlayer from "react-player";

const AdminPropertyEdit = () => {
  const [images, setImages] = useState({
    img1: adminEdit1,
    img2: adminEdit2,
    img3: adminEdit3,
    img4: adminEdit4,
    avatar: adminEdit4,
    video:
      "https://res.cloudinary.com/dlb8nbz13/video/upload/c_scale,h_390,q_91,w_618/v1706177257/WhatsApp_Video_2024-01-25_at_11.05.54_eb4762c7_paf2hg.mp4",
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
  const handleVideo = (id) => {
    let fileInput = document.getElementById(id);
    fileInput.click();
    fileInput.onchange = () => {
      const [file] = fileInput.files;
      setImages((prevState) => {
        return { ...prevState, [id]: file ? URL.createObjectURL(file) : {} };
      });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="  mb-5  ">
      <AdminLayout>
        <div className=" d-md-flex  flex-wrap  justify-content-between  align-items-center admin-property-header mx-4">
          <h1 className="fs-6 text-capitalize  ">Edit property</h1>

          <div className="d-flex gap-1 fs-6 align-items-center">
            <Link>Home</Link>/<Link>Edit Property</Link>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className=" mt-5 d-flex  align-items-center justify-content-between  mx-4 ">
            <div>
              <h2>New Title</h2>
              <p className="admin-address">Address</p>
            </div>

            <div className="admin-property-btn-save" type="button">
              <button>Edit</button>
            </div>
          </div>

          <div>
            {/* this is for the add image component */}
            {/* <AdminAddPic className={"admin-addPic1"} /> */}

            <div className=" d-flex gap-2">
              {/* this is for the picture section */}

              <div
                className=" admin-add-new-pic"
                onClick={() => handleImage("img1")}
              >
                <input
                  type="file"
                  style={{ display: "none" }}
                  // onChange={handlePic}
                  accept="image/*"
                  id="img1"
                />
                <img src={images.img1} alt="preview" className="" />

                <div className="admin-btn">
                  <button>
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

            {/* this is for the add image component */}
          </div>

          <div>
            {/* this is for add video */}

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
                        onClick={() => handleVideo("video")}
                      >
                        <input
                          type="file"
                          style={{ display: "none" }}
                          accept="video/*"
                          id="video"
                        />
                        <ReactPlayer width={`100%`} url={images.video} />

                        <div className="admin-btn-video">
                          <button>
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

              <div className="  admin-second-form-fill">
                <div
                  onClick={() => {
                    handleImage("avatar");
                  }}
                >
                  <img src={images.avatar} alt="" />
                  <input
                    type="file"
                    accept="images/"
                    id="avatar"
                    style={{ display: "none" }}
                  />
                </div>

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
              </div>
            </div>

            {/* this is for add video */}
            {/* <AdminForm /> */}
          </div>
        </form>
      </AdminLayout>
    </div>
  );
};

export default AdminPropertyEdit;
