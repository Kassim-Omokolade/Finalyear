import AdminLayout from "../../components/Admin components/AdminLayout";
import { Link } from "react-router-dom";
import "../../styles/Admin Styles/AdminAddProperty.css";
import { useState } from "react";
import black from "../../assets/images/black.jpg";
import { MdOutlineCameraAlt } from "react-icons/md";
import "../../styles/Admin Styles/AdminAddProperty.css";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { BsArrowDownRightSquare } from "react-icons/bs";

import ReactPlayer from "react-player";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddNewProperties = () => {
  const redirect = useNavigate();
  const { Base_Url } = useGlobalContext();

  const [imgPreview, setimgPreview] = useState({
    img1: black,
    img2: black,
    img3: black,
    img4: black,
    img5: black,
    avatar: black,
    video:
      "https://res.cloudinary.com/dlb8nbz13/video/upload/c_scale,h_390,q_91,w_618/v1706177257/WhatsApp_Video_2024-01-25_at_11.05.54_eb4762c7_paf2hg.mp4",
  });

  const [property, setProperty] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    tags: "",
    propertyType: "",
    bedroom: "",
    bathroom: "",
    squareFeet: "",
    name: "",
    whatsappNumber: "",
    phoneNumber: "",
    garage: false,
    video: null,
    avatar: null,
    img1: null,
    img2: null,
    img3: null,
    img4: null,
  });
  const [add, setadd] = useState(false);
  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  // input file e.target.files[0]
  const handleImage = (id) => {
    let fileInput = document.getElementById(id);
    fileInput.click();
    fileInput.onchange = () => {
      const [file] = fileInput.files;
      setimgPreview((prevState) => {
        return { ...prevState, [id]: file ? URL.createObjectURL(file) : {} };
      });

      setProperty((prevProperty) => {
        return { ...prevProperty, [id]: file };
      });
    };
  };
  const handleVideo = (id) => {
    let fileInput = document.getElementById(id);
    fileInput.click();
    fileInput.onchange = () => {
      const [file] = fileInput.files;
      setimgPreview((prevState) => {
        return { ...prevState, [id]: file ? URL.createObjectURL(file) : {} };
      });
      setProperty((prevProperty) => {
        return { ...prevProperty, [id]: file };
      });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", property.title);
    formData.append("price", property.price);
    formData.append("description", property.description);
    formData.append("location", property.location);
    formData.append("tags", property.tags);
    formData.append("propertyType", property.propertyType);
    formData.append("bedroom", property.bedroom);
    formData.append("bathroom", property.bathroom);
    formData.append("garage", property.garage);
    formData.append("squareFeet", property.squareFeet);
    formData.append("name", property.name);
    formData.append("whatsappNumber", property.whatsappNumber);
    formData.append("phoneNumber", property.phoneNumber);
    formData.append("video", property.video);
    formData.append("avatar", property.avatar);
    formData.append("images", property.img1);
    formData.append("images", property.img2);
    formData.append("images", property.img3);
    formData.append("images", property.img4);
    try {
      setadd(true);
      const { data } = await axios.post(`${Base_Url}/property`, formData);
      console.log(data);
      if (data.success) {
        toast.success("property added successfully");
        redirect("/admin/dashboard");
      }
    } catch (error) {
      setadd(false);
      console.log(error);
      toast.error("error occured while adding property");
    }
  };

  return (
    <div className="  mb-5  ">
      <AdminLayout>
        <div className=" d-md-flex  flex-wrap  justify-content-between  align-items-center admin-property-header mx-4">
          <h1 className="fs-6 text-capitalize  ">Add new property</h1>
          <ToastContainer />

          <div className="d-flex gap-1 fs-6 align-items-center">
            <Link>Home</Link>/<Link>Add New Property</Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className=" mt-5 d-flex  align-items-center justify-content-between  mx-4 ">
            <div>
              <h2>New Title</h2>
              <p className="admin-address">Address</p>
            </div>

            <div className="admin-property-btn-save" type="button">
              <button type="submit">{add ? "Adding..." : "Save"}</button>
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
                  accept="image/*"
                  id="img1"
                />
                <img src={imgPreview.img1} alt="preview" className="" />

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
                  <img src={imgPreview.img2} alt="preview" className="" />

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
                  <img src={imgPreview.img3} alt="preview" className="" />

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
                  <img src={imgPreview.img4} alt="preview" className="" />

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
                    <select
                      name="tags"
                      value={property.tags}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Property Tag</option>
                      <option value="luxury">Luxury</option>
                      <option value="affordable">Affordable</option>
                      <option value="spacious">Spacious</option>
                      <option value="comfortable">Comfortable</option>
                      <option value="cozy">Cozy</option>
                    </select>
                  </div>

                  <div className=" d-flex  flex-column gap-1 admin-second-form">
                    <label>Property Type</label>
                    <select
                      required
                      name="propertyType"
                      value={property.propertyType}
                      onChange={handleChange}
                    >
                      <option>Type</option>
                      <option value="land">Land</option>
                      <option value="house">House</option>
                    </select>
                  </div>
                </div>
                <div className=" d-sm-block  d-md-flex   gap-2 mt-3">
                  <div className=" d-flex  flex-column gap-1 admin-first-form">
                    <label>Title</label>
                    <input
                      type="text"
                      required
                      name="title"
                      value={property.title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" d-flex  flex-column gap-1 admin-second-form">
                    <label>Sales Price</label>
                    <input
                      type="number"
                      name="price"
                      required
                      value={property.price}
                      onChange={handleChange}
                      id=""
                    />
                  </div>
                </div>
                <div className=" mt-3">
                  <div className=" d-flex  flex-column gap-1 admin-third-form">
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={property.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className=" mt-3">
                  <div className=" d-flex  flex-column gap-1 admin-fourth-form">
                    <label>Description</label>
                    <textarea
                      type="text"
                      name="description"
                      required
                      value={property.description}
                      onChange={handleChange}
                    />
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
                            name="bedroom"
                            min={"0"}
                            // required
                            value={property.bedroom}
                            onChange={handleChange}
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
                            name="bathroom"
                            min={"0"}
                            // required
                            value={property.bathroom}
                            onChange={handleChange}
                          />
                          <div className=" position-absolute admin-bed">
                            <LuBath />
                          </div>
                        </div>

                        {/* 4 */}
                        <div className=" position-relative  admin-choose">
                          <input
                            type="checkbox"
                            name="garage"
                            className=" ms-1  position-relative"
                            value={property.garage}
                            onChange={handleChange}
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
                            name="squareFeet"
                            min={"0"}
                            // required
                            value={property.squareFeet}
                            onChange={handleChange}
                          />
                          <div className=" position-absolute admin-bed">
                            <BsArrowDownRightSquare />
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
                    {/* video part */}
                    <div className="p-4 admin-add-video-border">
                      <div
                        className=" admin-add-new-video"
                        onClick={(e) => {
                          // e.preventDefault();
                          handleVideo("video");
                        }}
                      >
                        <input
                          type="file"
                          style={{ visibility: "hidden" }}
                          accept="video/*"
                          id="video"
                          required
                          name="video"
                        />
                        <ReactPlayer width={`100%`} url={imgPreview.video} />

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

              <div
                className=" text-center mt-3 border  border-1 me-3 px-3 py-4"
                style={{
                  height: "fit-content",
                  width: "fit-content",
                  borderRadius: "15px",
                }}
              >
                <div className="  admin-second-form-fill">
                  <div
                    onClick={() => {
                      handleImage("avatar", "avatar");
                    }}
                  >
                    <img src={imgPreview.avatar} alt="" />
                    <input
                      type="file"
                      accept="imgPreview/"
                      id="avatar"
                      style={{ display: "none" }}
                    />
                  </div>

                  <div className=" d-flex  flex-column  text-start ">
                    <label htmlFor="">Support In Change</label>
                    <input
                      type="text"
                      className="admin-second-form"
                      name="name"
                      required
                      value={property.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" d-flex  flex-column  text-start mt-2">
                    <label htmlFor="">WhatsApp Contact Details</label>
                    <input
                      type="text"
                      className="admin-second-form"
                      name="whatsappNumber"
                      required
                      value={property.whatsappNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" d-flex  flex-column  text-start mt-2">
                    <label htmlFor="">Call Contact Details</label>
                    <input
                      type="text"
                      className="admin-second-form"
                      name="phoneNumber"
                      required
                      value={property.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
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

export default AddNewProperties;