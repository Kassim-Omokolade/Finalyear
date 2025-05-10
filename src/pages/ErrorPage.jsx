import { Link } from "react-router-dom";
import error from "../assets/images/error.png";
import UserNavbar from "../components/User components/UserNavbar";
import UserFooter from "../components/User components/UserFooter";

const ErrorPage = () => {
  return (
    <div>
      <UserNavbar />
      <div className="text-center my-5 my-md-1">
        <img
          src={error}
          alt="error image"
          className="img-fluid d-block mx-auto"
        />
        <Link to="/" className="text-decoration-none">
          <button
            className="btn  d-block my-1 mx-auto"
            style={{ backgroundColor: "#002b5b", color:"#ffffff" }}
          >
            Go Back To Homepage
          </button>
        </Link>
      </div>
      <UserFooter />
    </div>
  );
};

export default ErrorPage;
