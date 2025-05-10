import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../Hooks/useGlobalContext";
import "../../../styles/User Styles/UserFeature.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaBathSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { ImLocation } from "react-icons/im";
import { GrLink } from "react-icons/gr";
import { IoMdVideocam } from "react-icons/io";
import { AiFillPicture } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../Loading";
import { formatPrice } from "../../../utils/helpers";

const UserFeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { Base_Url } = useGlobalContext();

  const getFeaturedProperties = async () => {
    try {
      const { data } = await axios(`${Base_Url}/property/featured`);
      setFeaturedProperties(data.featuredproperties);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeaturedProperties();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  // const sliceProperty = properties.slice(0, 6);

  return (
    <section className="feature-container py-4 overflow-hidden container  ">
      <div className="UserPropertiesCard-Container pt--lg-5 mt-lg-5">
        <div className=" w-100 mt-lg-5">
          <h2 className="text-start mt-5 d-block ">Feature Properties</h2>
        </div>

        <div className="card-cover d-flex overflow-x-scroll gap-3 align-items-center">
          {/* <Slider {...settings}> */}
          {featuredProperties.map((property) => {
            const {
              _id,
              media: { images },
              title,
              price,
              location,
              bedroom,
              bathroom,
            } = property;
            return (
              <div key={_id}>
                <Link to={`/properties/${_id}`}>
                  <div className="card border border-dark">
                    <div className="featured">Featured</div>

                    <div className="forSale">For sale</div>
                    <div className="properties-image">
                      <img src={images[0]} alt="Properties Image" />
                      <div className="inner-icons">
                        <GrLink className="icon" />

                        <IoMdVideocam className="icon" />

                        <AiFillPicture className="icon" />
                      </div>
                    </div>

                    <div className="card-content">
                      <div className="card-title">{title}</div>
                      <div className="location">
                        <ImLocation />
                        <span style={{ marginLeft: "5px" }}>{location}</span>
                      </div>

                      <div className="bed-toilet">
                        <div className="bedroom">
                          <IoBedOutline className="fs-4" />
                          <span>{bedroom} bedrooms </span>
                        </div>

                        <div className="toilet">
                          <LiaBathSolid className="fs-3" />
                          <span>{bathroom} bathrooms</span>
                        </div>
                      </div>

                      <hr />

                      <div className="price-icon">
                        <div className="price difft">
                          <span>{formatPrice(price)}</span>
                        </div>

                        <div className="share-like-icons">
                          <HiArrowsRightLeft />
                          <CiShare2 />
                          <CiHeart />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          {/* </Slider>  */}
        </div>
      </div>
    </section>
  );
};

export default UserFeaturedProperties;
