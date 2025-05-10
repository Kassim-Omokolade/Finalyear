import { useGlobalContext } from "../../Hooks/useGlobalContext";
import UserDiscover from "../../components/User components/HomeSubComponents/UserDiscover";
import UserFeaturedProperties from "../../components/User components/HomeSubComponents/UserFeaturedProperties";
import UserGetStarted from "../../components/User components/HomeSubComponents/UserGetStarted";
import UserHeroSection from "../../components/User components/HomeSubComponents/UserHeroSection";
import UserNewsletter from "../../components/User components/HomeSubComponents/UserNewsletter";
import USerWhyChooseUs from "../../components/User components/HomeSubComponents/UserWhyChooseUs";
import UserFooter from "../../components/User components/UserFooter";
import UserNavbar from "../../components/User components/UserNavbar";

const Homepage = () => {
  const {isDark} = useGlobalContext()
  return <div className={isDark ? "DarkMode" : null}>
    <UserNavbar />
    <UserHeroSection />
    <UserDiscover />
    <USerWhyChooseUs />
    <UserFeaturedProperties />
    <UserGetStarted />
    <UserNewsletter />
    <UserFooter />
  </div>;
};

export default Homepage;
