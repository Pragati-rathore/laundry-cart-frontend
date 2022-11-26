import React from "react";
import { useState } from "react";
import "./Register.css";
import Header from "../../header";
// import Footer from "../../footer";
import Foter from "../Footersend/Foter";
// import { useNavigate } from "react-router-dom";

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
  // const navigate = useNavigate();

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = (e) => {
    e.preventDefault();
    const { name, email, phone, district, state, pincode, address, password } =
      user;
    fetch("https://laundry-server.onrender.com/register", {
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
        console.log(data)
        if (data.status === "failed") {
          window.alert(data.message);
          //  console.log("registration succ")
        } else if(data.status==="success") {
          window.alert(data.message);
          //  console.log("invalid succ")
        }
      }).catch((err) => {
        console.log(err);
      });
    // await res.json()
  };

  return (
    <>
      <Header />
      <div className="signup-cont">
        <div className="signup-cont-left">
          <h1 className="signup-main-laundryheading">Laundry Service</h1>
          <p className="signup-main-laundrydescription">
            Doorstep Wash & Dryclean Service
          </p>
          <p className="signup-main-alreadyhaveaccount">Already Have Account</p>
          <button className="signup-main-registerbutton">Sign In</button>
        </div>
        <div className="signup-cont-right">
          <p className="signup-main-registerheading">REGISTER</p>
          <div className="register-input">
            <div className="register-input-width50">
              <label class="custom-field two">
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
              <br></br>

              <label class="custom-field two">
                <input
                  type="number"
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

              <label class="custom-field two">
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

              <label class="custom-field two">
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
              <label class="custom-field two">
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

              <label class="custom-field two">
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
              <label class="custom-field two"></label>

              <label class="custom-field two">
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

              <label class="custom-field two">
                <input
                  type="number"
                  name="pincode"
                  value={user.pincode}
                  onChange={handleInputs}
                  placeholder="Pincode"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
            </div>
          </div>
          <p className="register-agree">
            <p style={{ textDecoration: "underline", fontSize: "18px" }}>
              <input type="checkbox" className="register-checkbox"></input>I
              agree to Terms & Condition receiving marketing and promotional
              materials.
            </p>
          </p>

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
      <Foter />
    </>
  );
};

export default Register;
