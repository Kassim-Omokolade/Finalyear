// import House from "../../assets/images/House.png";
import "../../styles/User Styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import House from "../../assets/images/House.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isDark, Base_Url } = useGlobalContext();
  const redirect = useNavigate()
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setClicked(true)

    try {
      const {data} = await axios.post(`${Base_Url}/login`, {email, password}) 
      if (data.success) {
        setClicked(false)
        redirect('/inspection')
        toast.success("Log in successfully")
        // redirect to inspection
        // handle token - local storage
        localStorage.setItem("token", data.token)
      }
      
    } catch (error) {
      console.log(error);
      setClicked(false)
      toast.error(error.response?.data?.err)
      setEmail('')
      setPassword('')
    }
  }
  return (
    <div className={isDark ? "DarkMode" : null}>
      <div className=" vh-100 overflow-y-hidden d-flex justify-content-center w-100">
        <ToastContainer
          theme="colored"
          toastStyle={{ backgroundColor: "#002b5b", color: "#fff" }}
        />
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="input-field p-3 p-md-5 col-12">
            <div className="header lh-1 mb-4 text-center text-md-start">
              <p className="text fw-bold fs-4">
                Welcome Back to Sunkas Construction Limited
              </p>
              <p>Enter your details to access your account</p>
            </div>
            <form className="inputs " onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fs-6">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control active shadow-none"
                  placeholder="abc@gmail.com"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3 position-relative">
                <div className="password-field d-flex justify-content-between ">
                  <label htmlFor="password" className="form-label fs-6">
                    Password
                  </label>
                  {/* <span className="text-danger">Forgot Password?</span> */}
                </div>
                <input
                  type={show ? "text" : "password"}
                  className="form-control shadow-none "
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="border-none border-0 outline-none bg-transparent position-absolute top-50"
                  style={{ right: "7px", backgroundColor: "transparent" }}
                  onClick={togglePassword}
                >
                  {show ? <FaEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>

              <div className="form-check py-2">
                <input
                  className="usersignup-checkbox shadow-none"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="btn  text-center w-100 btn-lg"
                style={{ backgroundColor: "#002b5b", color: "#ffffff" }}
              >
                {clicked ? "Logging in..." : "Sign in"}
              </button>
            </form>

            <p className="mt-2">
              New user?{" "}
              <Link
                to="/signup"
                className="fw-bold "
                style={{ color: "#002b5b" }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <img
          src={House}
          alt="House Image"
          className=" w-50 rounded-left d-none d-md-block "
        />
      </div>
    </div>
  );
};

export default Login;
