import React, { useState } from 'react';
import { useGlobalContext } from '../../../Hooks/useGlobalContext';
import Carousel from 'react-multi-carousel';
import Slider from "react-slick";
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/User Styles/UserDiscover.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const CustomPrevArrow = (props) => (
    <div
      className="custom-arrow custom-prev-arrow"
      onClick={props.onClick}
    >
      <FaLongArrowAltLeft size="40px"/>
    </div>
  );
  
  const CustomNextArrow = (props) => (
    <div
      className="custom-arrow custom-next-arrow"
      onClick={props.onClick}
    >
      <FaLongArrowAltRight size="40px"/>
    </div>
  );


const UserPropertyDiscover = () => {
    const {properties} = useGlobalContext();
    const [ discover, setDiscover] = useState(properties);

        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
        //   slidesToScroll: 4,
          initialSlide: 1,
          className: "center",
          centerPadding: "60px",
          swipeToSlide: true,
      afterChange: function(index) {
        // console.log(
        //   Slider Changed to: ${index + 1}, background: #222; color: #bada55
        // );
      },
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1 ,
                slidesToScroll: 1
              }
            }
          ]
        };
        

  return (
    <section className='userdiscover-cover mt-5 '>
        <h1 className='text-center discoverH1' >Discover More Properties</h1>
            <Slider {...settings} className='slide mt-5 '>
            <CustomPrevArrow/>
            {discover.map((dis)=>{
                const {_id, image, title, location, features, type, createdAt, price} = dis ;
                return<div className="cards"  key={_id}>
                         
                         <img src={image} alt={title} /> 
                         <div className='card-bottom'>
                             <h4>{title}</h4>
                             <h4>{price}</h4>
                             <div className="features">
                                <p>6 Bed</p>
                                <div className='userdiscover-line'></div>
                                <p>3 Bath</p>
                                <div className='userdiscover-line'></div>
                                <p>720 sq ft</p>
                             </div>
                             <div className="location">
                             <MdLocationOn size={22} />
                             <span>{location}</span>
                             </div>
                         </div>  
                         
                      </div>
            })}
            <CustomNextArrow/>
            </Slider>
    </section>
  )
}
// }
export default UserPropertyDiscover