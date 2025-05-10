import House from "../../assets/images/House.png";
import "../../styles/User Styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

// import search from "../assets/search.png";

const Signup = () => {
  const redirect = useNavigate();
  const { isDark, Base_Url } = useGlobalContext();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const [clicked, setClicked] = useState(false);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const togglePassword2 = (e) => {
    e.preventDefault();
    setShow2(!show2);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setClicked(true);
    console.log(user);
    if (user.password.length < 7) {
      toast.error("Password length must be at least 7 characters");
      setClicked(false);
      return;
    }
    if (user.confirmPassword !== user.password) {
      toast.error("Password does not match");
      setClicked(false);
      return;
    }

    try {
      // Send a post request
      const { data } = await axios.post(`${Base_Url}/register`, {
        ...user,
      });

      if (data.success) {
        toast.success("Account Created Successfully");
        redirect("/login");
        setClicked(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.err);
      setClicked(false);
      setUser({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div
      className="vh-100 overflow-y-hidden"
      style={{ maxWidth: "1500px", margin: "auto" }}
    >
      <ToastContainer
        theme="colored"
        toastStyle={{ backgroundColor: "#002b5b", color: "#fff" }}
      />
      <div className={isDark ? "DarkMode" : null}>
        <div className="col-12 d-flex justify-content-between m-auto ">
          <div className="col-md-6 d-flex flex-column justify-content-center container p-lg-5">
            <h2 className="fs-4 mt-3">
              Join our community of home seekers and explore the possibilities
              that await.
            </h2>

            <p className="text-secondary ">
              Lets get started by filling out the information below
            </p>

            <form
              className="d-flex flex-column gap-3"
              onSubmit={handleRegister}
            >
              <div className="d-flex flex-wrap gap-3 w-100">
                <div className="flex-grow-1">
                  <label htmlFor="firstname" className="d-block">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-100"
                    required
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-grow-1">
                  <label htmlFor="firstname" className="d-block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-100"
                    required
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="w-100">
                <label htmlFor="email" className="d-block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-100"
                  required
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="w-100 position-relative">
                <label htmlFor="email" className="d-block">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="........"
                  className="w-100"
                  required
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <button
                  className="border-none border-0 outline-none bg-transparent position-absolute top-50"
                  style={{ right: "7px", backgroundColor: "transparent" }}
                  onClick={togglePassword}
                >
                  {show ? <FaEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>
              <div className="w-100 position-relative">
                <label htmlFor="password" className="d-block">
                  Confirm Password
                </label>
                <input
                  type={show2 ? "text" : "password"}
                  placeholder="........"
                  className="w-100"
                  required
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  className="border-none border-0 outline-none bg-transparent position-absolute top-50"
                  style={{ right: "7px", backgroundColor: "transparent" }}
                  onClick={togglePassword2}
                >
                  {show2 ? <FaEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>
              <div className="d-flex w-100 align-items-center">
                <input
                  type="checkbox"
                  className="usersignup-checkbox"
                  required
                />
                <label htmlFor="checkbox" className="ms-1">
                  I agree to <a href="">Terms of Service</a> and{" "}
                  <a href="">Privacy Policies</a>
                </label>
              </div>

              <button
                className="btn text-white w-100"
                style={{ backgroundColor: "#002b5b", color: "#ffffff" }}
              >
                {clicked ? "Creating account...." : "Sign Up "}
              </button>
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className=" fw-bold"
                  style={{ color: "#002b5b" }}
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>

          <div className="col-md-6 d-lg-block d-none">
            <img src={House} alt="" className="vh-100 w-100 object-fit-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
