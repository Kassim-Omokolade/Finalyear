import { createContext, useEffect, useState, useContext } from "react";
import { useGlobalContext } from "./Hooks/useGlobalContext";
import axios from "axios";

const AdminContext = createContext();

export const useAdminContext = () => useContext(AdminContext);

const AdminProvider = ({ children }) => {
  const { Base_Url } = useGlobalContext();
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  const updateType = (e) => {
    setType(e.target.value);
  };

  const url = `${Base_Url}/property?type=${type}&location=${location}`;
  const getProperties = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(url);
      setProperties(data.properties);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, [type, location]);

  return (
    <AdminContext.Provider
      value={{ isLoading, properties, type, updateType, location, setLocation }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
