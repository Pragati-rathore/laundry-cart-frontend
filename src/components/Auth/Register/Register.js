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

const chkInputRegEx = {
  email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  name: /^[a-zA-Z]{2,}[a-zA-Z ]*$/,
  phone: /^\d{10}$/,
  password: /^.{6,}$/,
  pincode: /^\d{6,}$/,
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
    tandc: false,
  });

  const [error, setError] = useState({
    err: false,
    errMsg: "",
  });

  const navigate = useNavigate();

  const validateAndSetError = (inputName, inputValue) => {
    if (chkInputRegEx[inputName] === undefined) return;
    const isValid = chkInputRegEx[inputName].test(inputValue);

    if (isValid === true && error.err === true) {
      setError({ err: false, errMsg: "" });
    } else if (isValid === false && error.err === false) {
      setError({ err: true, errMsg: errorMsg[inputName] });
    }
  };

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    validateAndSetError(name, value);
    if (e.target.type === "checkbox") {
      setUser({ ...user, [name]: !user[name] });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
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
          {error.err && <p className="error">{error.errMsg}</p>}
          <div className="register-form-wrapper">
            <form
              id="reg-form"
              onSubmit={handleSubmit}
              method="POST"
              action="#"
            >
              <div className="input-wrapper">
                <label className="input-label" htmlFor="name"></label>
                <input
                  type="text"
                  value={user.name}
                  name="name"
                  id="name"
                  onChange={handleInputs}
                  placeholder="Name"
                  required={true}
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="email"></label>
                <input
                  type="email"
                  value={user.email}
                  name="email"
                  onChange={handleInputs}
                  placeholder="Email"
                  id="email"
                  required={true}
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="password"></label>
                <input
                  type="password"
                  value={user.password}
                  name="password"
                  onChange={handleInputs}
                  placeholder="Password"
                  required={true}
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="phone"></label>
                <input
                  type="text"
                  value={user.phone}
                  name="phone"
                  onChange={handleInputs}
                  placeholder="Phone"
                  required={true}
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="#"></label>
                <select
                  id="state"
                  name="state"
                  value={user.state}
                  onChange={handleInputs}
                  required={true}
                >
                  <option value="" selected disabled>
                    State
                  </option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Assam">Assam</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="#"></label>
                <select
                  id="district"
                  name="district"
                  value={user.district}
                  onChange={handleInputs}
                  required={true}
                >
                  <option value="" selected disabled>
                    District
                  </option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Guwahati">Guwahati</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="address"></label>
                <input
                  type="text"
                  value={user.address}
                  name="address"
                  onChange={handleInputs}
                  placeholder="Address"
                  required={true}
                  id="address"
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label" htmlFor="pincode"></label>
                <input
                  type="text"
                  value={user.pincode}
                  name="pincode"
                  onChange={handleInputs}
                  placeholder="Pincode"
                  required={true}
                  id="pincode"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="checkbox"
                  checked={user.tandc}
                  onChange={handleInputs}
                  name="tandc"
                  id="tandc"
                  required
                />
                <label className="input-label" htmlFor="tandc">
                  I agree to <a href="#reg-form">Terms & Conditions</a>
                </label>
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
      <FooterSend />
    </>
  );
};

export default Register;
