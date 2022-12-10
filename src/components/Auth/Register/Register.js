import React from "react";
import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import FooterSend from "../Footersend/Foter";
import BACKEND_URL from "../../../exports";

const errorMsg = {
  email: "Type a Valid Email",
  name: "Type Valid Full Name",
  phone: "Type a 10 digit valid phone number",
  password: "Type a valid password",
  pincode: "Type a valid 6 digit pincode",
};

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    state: "",
    pincode: "",
    address: "",
    password: "",
  });

  const [isInvalid, setIsInvalid] = useState({
    bool: false,
    message: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();
    const { name, email, phone, district, state, pincode, address, password } =
      user;

    fetch(`${BACKEND_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        district,
        state,
        pincode,
        address,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "failed") {
          window.alert(data.message);
        } else if (data.status === "success") {
          navigate("/");
          //window.alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // await res.json()
  };

  return (
    <>
      <div className="register-page">
        <div className="register-page-left">
          <div>
            <p>Laundry Cart</p>
            <p>Doorstep Wash & Dryclean Service</p>
          </div>
          <div>
            <p>Already have an account</p>
            <button
              className="reg-btn light"
              type="button"
              onClick={(_e) => navigate("/")}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="register-page-right">
          <h2>REGISTER</h2>
          <div className="register-form-wrapper">
            <form id="reg-form" onSubmit={postData} method="POST" action="#">
              <div className="input-wrapper">
                <label className="input-label" htmlFor="#"></label>
                <input type="text" value="#" name="#" onChange="#" placeholder="#" />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="#"></label>
                <input type="text" value="#" name="#" onChange="#" placeholder="#" />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="#"></label>
                <input type="text" value="#" name="#" onChange="#" placeholder="#" />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="#"></label>
                <input type="text" value="#" name="#" onChange="#" placeholder="#" />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="#"></label>
                <input type="text" value="#" name="#" onChange="#" placeholder="#" />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="#"></label>
                <input type="text" value="#" name="#" onChange="#" placeholder="#" />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="#"></label>
                <input type="text" value="#" name="#" onChange="#" placeholder="#" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterSend />
    </>
  );
};

export default Register;
