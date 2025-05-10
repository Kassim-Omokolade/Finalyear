import React from "react";
import { Link} from "react-router-dom";
import { useGlobalContext } from "../../../Hooks/useGlobalContext";
import { LuShare2 } from "react-icons/lu";
import { TbSwitchHorizontal } from "react-icons/tb";
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { BsCameraVideoFill } from "react-icons/bs";
import { GrLink } from "react-icons/gr";
import { IoImageSharp } from "react-icons/io5";

const UserPropertyDetailsRelated = ({similar}) => {

  const RelatedProperties = similar
 
  return (
    <div className="w-100">
      <h2 className="ms-xxl-5 text-lg-start  text-center ">Related Properties</h2>

      <div className="UserPropertyRelatedCard d-flex flex-wrap justify-content-center w-100 align-items-center gap-3">
        {RelatedProperties.map((relprop) => {
          const {
            media: {images},
            _id,
            title,
            featured,
            location,
            price,
             bedroom, bathroom ,
          } = relprop;

          return (
            <div key={_id} className="UserPropertyRelated border rounded ">
              <Link to={`/properties/${_id}`}>
                <div className="position-relative">
                  <div className="UserfeaturedBtn w-100 p-3 d-flex justify-content-between position-absolute ">
                    <button
                      className={
                        featured
                          ? "btn bg-success text-white"
                          : " btn bg-secondary text-white "
                      }
                    >
                      Featured
                    </button>
                    <button
                      className="btn text-white"
                      style={{
                        backgroundColor: !featured ? "#002b5b" : "#6c757d", // gray for secondary
                      }}
                    >
                      For Sale
                    </button>
                  </div>
                  <img src={images[0]} alt="" className="w-100" />
                  <div className="UserPropDetBottom d-flex gap-3 text-white position-absolute ">
                    <GrLink className="p-2 rounded bg-secondary fs-2" />
                    <BsCameraVideoFill className="p-2 rounded bg-secondary fs-2" />
                    <IoImageSharp className="p-2 rounded bg-secondary fs-2" />
                  </div>
                </div>
                <div className="p-2">
                  <div className="p-2">
                    <p className="fw-bold lh-sm">{title}</p>
                    <p className="lh-sm">{location}</p>

                    <div className="d-flex justify-content-between ">
                      <p className="d-flex align-items-center gap-2 text-secondary">
                        <LiaBedSolid /> {bedroom}Bedrooms
                      </p>
                      <p className="d-flex align-items-center gap-2  text-secondary">
                        <LiaBathSolid /> {bathroom}Bathrooms
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between text-secondary  p-2">
                    <p className="fw-bold">
                      <span className="naira">N</span>
                      {price}
                    </p>
                    <div className="d-flex gap-3 fs-5 ">
                      <TbSwitchHorizontal />
                      <LuShare2 />
                      <CiHeart />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserPropertyDetailsRelated;
