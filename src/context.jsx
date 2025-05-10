import { createContext, useEffect, useState } from "react";
import { properties } from "./mockData/properties";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import axios from "axios";

export const AppContext = createContext();

const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <FaLongArrowAltLeft size="40px" />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <FaLongArrowAltRight size="40px" />
  </div>
);

const AppProvider = ({ children }) => {
  const [bedroomCount, setBedroomCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  //   const dark = localStorage.getItem('isDark');
  // setIsDark(dark)
  const setLightMode = () => {
    setIsDark(!isDark);
    console.log("clicked light mode");
  };

  localStorage.setItem("isDark", isDark);

  const incrementBedroom = () => {
    setBedroomCount(bedroomCount + 1);
  };

  const decrementBedroom = () => {
    if (bedroomCount > 0) {
      setBedroomCount(bedroomCount - 1);
    }
  };

  const Base_Url = "https://ayobetahomeapi.onrender.com/api/v1";
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [isLoading, setisLoading] = useState("");
  const [bed, setBed] = useState("");
  const [price, setPrice] = useState("");
  const [properties, setProperties] = useState([]);

  const url = `${Base_Url}/property?location=${location}&type=${type}&bedroom=${bed}&sort=${price}`;

  const updatePrice = (e) => {
    if (e.target.value === "Default") {
      setPrice("");
    } else {
      setPrice(e.target.value);
    }
  };

  const clearFilters = () => {
    setLocation("");
    setBed("");
    setPrice("");
    setType("");
  };

  const getProperties = async () => {
    try {
      setisLoading(true);
      const { data } = await axios(url);
      setProperties(data.properties);
      setisLoading(false);
      // setBed("")
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, [location, type, bed, price]);

  return (
    <AppContext.Provider
      value={{
        properties,
        bedroomCount,
        incrementBedroom,
        decrementBedroom,
        isDark,
        setIsDark,
        setLightMode,
        Base_Url,
        setLocation,
        setType,
        setBed,
        isLoading,
        setPrice,
        updatePrice,
        price,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
