import React from "react";
import ContactImg from "../../../assets/images/contactImg.png"
import { GoArrowUpRight } from "react-icons/go";

const UserPropertyDetailForm = ({property}) => {
    
  return (
    <div>
      <p className="fw-bold fs-4">Contact {property.salesSupport.name}</p>

      <div className="d-flex align-items-center gap-2 ">
        <img
          src={property.salesSupport.avatar}
          alt="contact-img"
          className=" usercontact-img rounded rounded-circle "
        />
        <div>
          <p className="fw-bold lh-1">{property.salesSupport.name}</p>
          <p className="lh-1">
            {property.salesSupport.phoneNumber}{" "}
            <button
              className="btn  text-white"
              style={{ backgroundColor: "#002b5b" }}
            >
              Show
            </button>
          </p>
          <p className="lh-1">adura@bh.com</p>
        </div>
      </div>

      <form>
        <label className="form-label ">Name</label>
        <input type="text" className="form-control" />
        <label className="form-label ">Email</label>
        <input type="email" className="form-control" />
        <label className="form-label ">Phone</label>
        <input type="tel" className="form-control" />

        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea id="" cols="30" rows="10" className="form-control"></textarea>

        <button
          className="w-100 btn  fw-bold text-white my-3 "
          style={{ backgroundColor: "#002b5b" }}
        >
          Send Message
        </button>
        <button
          className="btn w-100"
          style={{ border: "1px solid #002b5b", color: "#002b5b" }}
        >
          Whatsapp <GoArrowUpRight />
        </button>
      </form>
    </div>
  );
};

export default UserPropertyDetailForm;
