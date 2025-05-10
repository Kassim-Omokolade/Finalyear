import UserNavbar from "../../components/User components/UserNavbar";
import UserPropertyHeroSection from "../../components/User components/PropertiesSubComponents/UserPropertyHeroSection";
import UserPropertyCardComponent from "../../components/User components/PropertiesSubComponents/UserPropertyCardComponent";
import UserPropertyDiscover from "../../components/User components/PropertiesSubComponents/UserPropertyDiscover";
import UserFooter from "../../components/User components/UserFooter";
import UserDiscover from "../../components/User components/HomeSubComponents/UserDiscover"
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { useEffect } from "react";

const Properties = () => {
  const { isDark } = useGlobalContext();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={isDark ? "DarkMode" : null}>
      <UserNavbar />
      <UserPropertyHeroSection />
      <UserPropertyCardComponent />
      <UserDiscover />
      <UserFooter />
    </div>
  );
};

export default Properties;
