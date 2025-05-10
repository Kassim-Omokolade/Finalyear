import React from 'react';
import "../../../styles/User Styles/UserWhyChooseUs.css";
import houseKey from "../../../assets/images/houseKey.png"
import handshake from "../../../assets/images/handShake.png"
import camera from "../../../assets/images/Camera.png"
import ring from "../../../assets/images/ring.png";



const USerWhyChooseUs = () => {


  return (
    <section className="whyChooseUs">
      <div className="whyChoose-cover">
        <h1>Why Choose Us</h1>

        <div className="whyChoose-textIcon">
          <div className="houseKey same">
            <img src={houseKey} alt="" />
            <h3>Wide Range of Properties</h3>
            <p>
              {" "}
              Explore a diverse selection of homes and estates, suited for every
              budget and lifestyle.
            </p>
          </div>
          <div className="choose-lines"></div>
          <div className="handshake same">
            <img src={handshake} alt="" />
            <h3>Trusted by thousands</h3>
            <p>
              Join a growing community of satisfied clients who trust us for
              their property needs.
            </p>
          </div>
          <div className="choose-lines"></div>
          <div className="houseKey same">
            <img src={camera} alt="" />
            <h3>Financing made easy</h3>
            <p>
              Enjoy straightforward financing options with flexible terms to
              suit your financial goals.
            </p>
          </div>
          <div className="choose-lines"></div>
          <div className="houseKey same">
            <img src={ring} alt="" />
            <h3>24/7 support</h3>
            <p>
              Our team is available around the clock to assist with any
              questions or concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default USerWhyChooseUs