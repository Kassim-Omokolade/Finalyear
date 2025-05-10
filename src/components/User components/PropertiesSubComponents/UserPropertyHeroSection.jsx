import React, { useState } from "react";
import "../../../styles/User Styles/UserPropertyHeroSection.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { useGlobalContext } from "../../../Hooks/useGlobalContext";

const UserPropertyHeroSection = () => {
  const {
    bedroomCount,
    decrementBedroom,
    incrementBedroom,
    setLocation,
    setType,
    setBed,
  } = useGlobalContext();
  const [loc, setLoc] = useState("");
  const [spec, setSpec] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    if (loc) {
      setLocation(loc);
    }

    if (spec) {
      setType(spec);
    }
    setType(spec);
    if (bedroomCount > 0) {
      setBed(bedroomCount);
    }

    else {
      setBed('');
    }
  };
  return (
    <div className="userhero-section ">
      <h1 className="mt-2 fw-bold ">Browse Our Properties</h1>
      <p className="userhero-subtitle">
        Find your perfect home among our curated properties. Start <br />{" "}
        browsing now!
      </p>
      <div className="search-cover mt-4">
        <div className="search-properties">
          <form
            action=""
            className="d-flex align-items-center"
            onSubmit={handleSearch}
            id="form1"
          >
            <div className="search-location">
              <span className="discoverfind">LOCATION</span>
              <input
                type="text"
                placeholder="eg. Lagos"
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
              />
            </div>

            <div className="userhero-lines"></div>

            <div className="search-location">
              <span htmlFor="" className="discoverfind">
                PROPERTY TYPE
              </span>
              <input
                type="text"
                placeholder="eg. land, house"
                value={spec}
                onChange={(e) => setSpec(e.target.value)}
              />
            </div>

            <div className="userhero-lines"></div>

            <div className="search-bedroom">
              <span className="discoverBed">BEDROOM</span>
              <div className="addMinus">
                <CiCircleMinus onClick={decrementBedroom} />
                <span>{bedroomCount}</span>
                <IoIosAddCircleOutline onClick={incrementBedroom} />
              </div>
            </div>
            <button id="form1" type="submit" className="userBtn">
              Find Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPropertyHeroSection;
