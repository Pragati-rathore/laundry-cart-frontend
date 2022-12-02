import React from "react";
import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import FooterSend from "../Footersend/Foter";
import BACKEND_URL from "../../../exports";

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
      <div className="flex-wrapper">
      <div className="signup-cont">
        <div className="signup-cont-left">
          <h1 className="signup-main-laundryheading">Laundry Service</h1>
          <p className="signup-main-laundrydescription">
            Doorstep Wash & Dryclean Service
          </p>
          <p className="signup-main-alreadyhaveaccount">Already Have Account</p>
          <button className="signup-main-registerbutton" onClick={e => navigate("/")}>Sign In</button>
        </div>
        <div className="signup-cont-right">
          <p className="signup-main-registerheading">REGISTER</p>
          <div className="register-input">
            <div className="register-input-width50">
              <label className="custom-field two">
                <form method="POST">
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Name"
                    style={{ fontSize: "18px", color: "#77838F" }}
                  />
                </form>
              </label>
              <br></br>
              <p id="errorname"></p>

              <label className="custom-field two">
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Phone No"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
              <br></br>
              <p id="errorphone"></p>
              <br></br>

              <label className="custom-field two">
                <input
                  type="text"
                  name="state"
                  value={user.state}
                  onChange={handleInputs}
                  placeholder="State"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
              <br></br>
              <p id="errorstate"></p>
              <br></br>

              <label className="custom-field two">
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleInputs}
                  placeholder="Address"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
              <br></br>
              <p id="erroraddress"></p>
            </div>
            <div className="register-input-width50">
              <label className="custom-field two">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Email"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
              <br></br>
              <p id="erroremail"></p>
              <br></br>

              <label className="custom-field two">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Password"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
              <br></br>
              <br></br>
              <br/>
              <label className="custom-field two"></label>

              <label className="custom-field two">
                <input
                  type="text"
                  name="district"
                  value={user.district}
                  onChange={handleInputs}
                  placeholder="District"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
              <br></br>
              <p id="errordistrict"></p>
              <br></br>

              <label className="custom-field two">
                <input
                  type="text"
                  name="pincode"
                  value={user.pincode}
                  onChange={handleInputs}
                  placeholder="Pincode"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
            </div>
          </div>
          <div className="register-agree">
            <p style={{ textDecoration: "underline", fontSize: "18px" }}>
              <input type="checkbox" className="register-checkbox"></input>I
              agree to Terms & Condition receiving marketing and promotional
              materials.
            </p>
          </div>

          <button
            onClick={postData}
            style={{
              backgroundColor: "#5861AE",
              marginLeft: "400px",
              marginBottom: "10px",
              fontSize: "larger",
              fontWeight: 700,
            }}
            className="registerbtn"
          >
            Register
          </button>
        </div>
      </div>
      </div>
      <FooterSend/>
    </>
  );
};

export default Register;
