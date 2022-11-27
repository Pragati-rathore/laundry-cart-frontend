import React from "react";
import "./FoterStyle.css";
import fb from "../../../images/facebook.jpg";
import insta from "../../../images/instagram.jpg";
import ln from "../../../images/linkedin.jpg";

const Foter = () => {
  return (
    // <div>
    <div className="main-cont">
      <hr className="referral-hr"></hr>
      <div className="referral-div">
        <h3 className="referral-h3">
          Now Refer & Earn <span>&#8377;</span>500 for every referral*
        </h3>
        <p className="referral-p">*Terms and Conditions will be applied</p>
      </div>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          top: "0px",
        }}
        className="footer-container"
      >
        <div className="footer-aboutUs">
          <p style={{ fontSize: "18px" }}>ABOUT US</p>
          <p className="footer-light-text">Doorstep Wash & Dryclean Service</p>
        </div>
        <div className="footer-home">
          <p style={{ fontSize: "16px" }}>Home</p>
          <p className="footer-light-text">Sign In</p>
          <p className="footer-light-text">Register</p>
        </div>
        <div className="footer-pricing">
          <p style={{ fontSize: "16px" }}>Pricing</p>
        </div>
        <div className="footer-career">
          <p style={{ fontSize: "16px" }}>Career</p>
          <p className="footer-light-text">Blogs</p>
          <p className="footer-light-text">Create</p>
        </div>
        <div className="footer-contacts">
          <p style={{ fontSize: "16px" }}>Contact</p>
        </div>
        <div className="footer-social">
          <p style={{ fontSize: "18px" }}>SOCIAL MEDIA</p>
          <div className="footer-icon-div">
            <img className="footer-icon" src={fb} alt="" />
            <img className="footer-icon" src={insta} alt="" />
            <img className="footer-icon" src={ln} alt="" />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Foter;
