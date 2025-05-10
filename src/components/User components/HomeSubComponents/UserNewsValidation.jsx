import React, { useState } from "react";
import "../../../styles/User Styles/Validation.css";
// import { useGlobalContext } from "../../Hooks/useGlobalContext";
const UserNewsValidation = () => {
    //   const {error, handleChange, handleSubmit, success, userEmail} = useGlobalContext()
      const [user, setUser] = useState({
        email: "",
      });

      const userEmail = user.email
    
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("");
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      const handleError = (message) => {
        setError(message);
        setTimeout(() => {
          setError("");
        }, 5000);
      };
    
      const handleSuccess = (message) => {
        setSuccess(message);
        setTimeout(() => {
          setSuccess("");
        }, 5000);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        //make sure user isnt submitting empty values
        if (!user.email || user.email != user.email) {
          handleError("please enter a valid email address");
        } else {
          handleSuccess("Thanks for subscribing to our Newsletter...");
    
          setError("");
          setUser({
            email: "",
          });
        }
      };
  return (
    <div className="user-newsletter">
      <div className="user-news-sec">
        <h3 className="">Sign Up to Our Newsletter</h3>
        <p className="">
          Don’t miss out! Get the latest property updates, deals, and helpful
          tips sent straight to your inbox. Be the first to know what’s new and
          find the perfect home faster and easier.
        </p>
      </div>
      <div className="user-mail">
        <form onSubmit={handleSubmit}>
          <p className="text-danger ">{error} </p>
          <p className="text-success">{success} </p>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={userEmail}
              onChange={handleChange}
              className="form-control"
            />
            <button className="user-submit-btn">Sign up</button>
          </label>
        </form>
      </div>
    </div>
  );
};



export default UserNewsValidation