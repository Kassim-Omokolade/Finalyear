import React from 'react'
import UserNewsValidation from './UserNewsValidation';
import "../../../styles/User Styles/Newsletter.css"

const UserNewsletter = () => {
  return (
    <div className="user-news-wrapper py-5 d-flex flex-md-row flex-column ">
      <div className="user-news-text">
        <h2 className="">Find A Home That Truly Suits You</h2>
        <p className="">
          {" "}
          We help you find a house that fits your needs, your budget, and your
          way of life. Whether you're looking to rent,sell or buy, we make the
          search easier, faster, and stress-free. Your perfect home is just a
          few clicks away!
        </p>
      </div>

      <div className="user-validation">
        <UserNewsValidation />
      </div>
    </div>
  );
}

export default UserNewsletter