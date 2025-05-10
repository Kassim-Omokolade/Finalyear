import House from "../../assets/images/House.png";
import "../../styles/Admin Styles/signupform.css";
import search from "../../assets/images/search.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const redirect = useNavigate()
  const {Base_Url} = useGlobalContext()
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [user, setUser] = useState({
    password: "",
    email: "",
    confirmPassword: "",
    role: "admin",
  });
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setClicked(true)
    if (user.password.length < 7) {
      toast.error("Password length must be at least 7 characters");
      setClicked(false)
      return;
    }
    if (user.confirmPassword !== user.password) {
      toast.error("Password does not match");
      setClicked(false)
      return;
    }

    try {
      // Send a post request
      const { data } = await axios.post(`${Base_Url}/register`, {
        ...user,
      });

      if (data.success) {
        toast.success("Account Created Successfully");
        redirect('/admin/login')
        setClicked(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.err);
      setClicked(false);
      setUser({
        password: "",
        email: "",
        confirmPassword: "",
      })
    }
  }

  const togglePassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const togglePassword2 = (e) => {
    e.preventDefault();
    setShow2(!show2);
  };
  return (
    <div className="d-flex justify-content-center sign-in vh-100">
      <ToastContainer
        theme="colored"
        toastStyle={{ backgroundColor: "#002b5b", color: "#fff" }}
      />
      <div className="input-field bg-light p-3 p-md-5 col-md-6">
        <div className="header lh-1 mb-4 text-center text-md-start">
          <p className="text fw-bold fs-4 ">Create an admin account.</p>
          <p>Lets get started by filling out the information below</p>
        </div>
        <form className="inputs " onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="email1" className="form-label fs-6">
              Email
            </label>
            <input
              type="email"
              className="form-control shadow-none"
              required
              placeholder="johndoe@gmail.com"
              id="email"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 position-relative">
            <label htmlFor="password1" className="form-label fs-6">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              className="form-control shadow-none"
              required
              id="password1"
              value={user.password}
              name="password"
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

          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label fs-6">
              Confirm Password
            </label>

            <input
              type={show2 ? "text" : "password"}
              placeholder="........"
              className="w-100 shadow-none"
              value={user.confirmPassword}
              name="confirmPassword"
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

          <button
            type="submit"
            className="btn
             text-center w-100 btn-lg"
            style={{ backgroundColor: "#002b5b", color: "#ffffff" }}
          >
            {clicked ? "Creating Account ..." : "Sign Up"}
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <Link
            to="/admin/login"
            className="fw-bold "
            style={{ color: "#002b5b" }}
          >
            Sign in
          </Link>
        </p>
      </div>
      <img
        src={House}
        alt="House Image"
        className=" w-50 rounded-left d-none d-md-block "
      />
    </div>
  );
};

export default SignupForm;
