import React from "react";
import "../../../styles/User Styles/usercontactcard.css";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";

const UserContactCardComponent = () => {
  return (
    <section className="usercontact-container p-3 ">
      <div className="user-contactinfo ">
        <div>
          <h4 className="user-contactheading">Get in Touch</h4>
          <p className="user-contactpara lh-lg ">
            Ready to find your dream home or have any questions about our real
            estate services? We're here to help! Feel free to get in touch with
            our dedicated team of real estate professionals.
          </p>
        </div>
        <div className="d-lg-flex flex-column gap-5 mt-lg-3  ">
          <div className="box shadow-sm border border-white my-4 my-lg-2 align-items-center  rounded p-2 d-flex">
            <div className="mx-3 ">
              <MdLocationOn
                color="#002b5b"
                className="p-2 rounded-circle fs-1 "
              />
            </div>
            <div className="text">
              <h6 className="user-contactcardtxt ">Location</h6>
              <p className="user-contactcardtxtinfo">
                95, Obasanjo Way, Lekki, Lagos
              </p>
            </div>
          </div>
          <div className="box shadow-sm border border-white my-4 my-lg-2 align-items-center rounded p-2 d-flex  ">
            <div className=" mx-3">
              <FaPhoneAlt
                color="#002b5b"
                className="p-2 rounded-circle fs-1 bg-secondary-subtle"
              />
            </div>
            <div className="text">
              <h6 className="user-contactcardtxt">Emergency Cal</h6>
              <p className="user-contactcardtxtinfo">+234 675 8935 675</p>
            </div>
          </div>
          <div className="box shadow-sm border border-white my-4 my-lg-2 align-items-center rounded p-2 d-flex ">
            <div className="mx-3 ">
              <IoMdShare
                color="#002b5b"
                className="p-2 rounded-circle fs-1 bg-secondary-subtle"
              />
            </div>
            <div className="text">
              <h6 className="user-contactcardtxt ">Follow us on</h6>
              <div className="fs-3">
                <TiSocialFacebook color="#002b5b" />
                <TiSocialTwitter color="#002b5b" />
                <TiSocialLinkedin color="#002b5b" />
                <FaInstagram color="#002b5b" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactform-container p-4 border border-white  rounded shadow border-secondary ">
        <div className="form-innercontainer">
          <div>
            <h4 className="user-contactheading">Quick Contact</h4>
            <p className="user-contactpara">
              Have a quick question or need immediate assistance? We're just a
              message away! Use the form below to send us a message, and we'll
              get back to you promptly
            </p>
          </div>
          <form
            className="user-contactform"
            action="https://formspree.io/f/mvoekwyo"
            method="post"
          >
            <div className="user-contactpair col-12">
              <div className="col-lg-6">
                <label className="form-label ">Name</label>
                <input
                  type="text"
                  rows="3"
                  className="form-control shadow-none focus-ring-success user-forminput"
                  required
                  name="name"
                />
              </div>
              <div className="col-lg-6 ">
                <label className="form-label ">Phone</label>
                <input
                  type="tel"
                  rows="3"
                  className="form-control shadow-none user-forminput"
                  required
                  name="phone Number"
                />
              </div>
            </div>
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id=""
              cols="8"
              rows="3"
              className="form-control shadow-none user-formtxtarea"
              required
              name="Message"
            ></textarea>

            <button className="user-contactbtn w-100 btn  fw-bold text-white my-2 " style={{backgroundColor:"#002b5b"}}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserContactCardComponent;
