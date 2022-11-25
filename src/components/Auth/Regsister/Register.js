import React from "react";
import { useState } from "react";
import "./Register.css"

const Register = () => {
  const[user,setUser]=useState({
    name:"",email:"",phone:"",district:"",state:"",pincode:"",address:"",password:"",cpassword:""
  })
  let name,value;
  const handleInputs=(e)=>{
    console.log(e)
      name=e.target.name
      value=e.target.value
      setUser({...user,[name]:value})
  }
  const postData= async(e)=>{
    e.preventDefault()
    const {name,email,phone,district,state,pincode,address,password,cpassword}=user
     const res=  await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        phone,
        district,
        state,
        pincode,
        address,
        password,
        cpassword
      })
     })
      // await res.json()
     const data = await res.json()
    if(res.status=== 400 ||422 ||500 || !data){
         window.alert("registration succ")
        //  console.log("registration succ")
    }else{
      window.alert("invalid succ")
        //  console.log("invalid succ")
    }
  }
  

  return (
    <>
      <div className="signupcontainer">
        <div className="signupcontainer-left">
          <h1 className="signup-maincontainer-laundryheading">
            Laundry Service
          </h1>
          <p className="signup-maincontainer-laundrydescription">
            Doorstep Wash & Dryclean Service
          </p>
          <p className="signup-maincontainer-alreadyhaveaccount">
            Already Have Account
          </p>
          <button
            // onClick={() => {
            //   navigate("/");
            // }}
            className="signup-maincontainer-registerbutton"
          >
            Sign In
          </button>
        </div>
        <div className="signupcontainer-right">
          <p className="signup-maincontainer-registerheading">REGISTER</p>
          <div className="register-input">
            <div className="register-input-width50">
              <label class="custom-field two">
                <form method="POST">
                <input
                  // value={name}
                  // onChange={(e) => {
                  //   setName(e.target.value);
                  // }}
                  type="text" name="name"
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
                  // value={phoneno}
                  // onChange={(e) => {
                  //   setPhoneno(e.target.value);
                  // }}
                  type="number" name="phone"
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
                  // value={state}
                  // onChange={(e) => {
                  //   setState(e.target.value);
                  // }}
                  type="text" name="state"
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
                  // value={address}
                  // onChange={(e) => {
                  //   setAddress(e.target.value);
                  // }}
                  type="text" name="address"
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
                  // value={email}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  type="email" name="email"
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
                  // value={password}
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                  type="password" name="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Password"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
              <br></br>
              <br></br>
              <label class="custom-field two">
                <input
                  type="password"
                  // value={confirmpassword}
                  // onChange={(e) => {
                  //   setConfirmpassword(e.target.value);
                  // }}
                  value={user.cpassword} name="cpassword"
                  onChange={handleInputs}
                  placeholder="Confirm password"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>
              <br></br>
              <p id="errorpassword"></p>
              <br></br>

              <label class="custom-field two">
                <input
                  // value={district}
                  // onChange={(e) => {
                  //   setDistrict(e.target.value);
                  // }}
                  type="text" name="district"
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
                  // value={pincode}
                  // onChange={(e) => {
                  //   setPincode(e.target.value);
                  // }}
                  type="number" name="pincode"
                  value={user.pincode}
                  onChange={handleInputs}
                  placeholder="Pincode"
                  style={{ fontSize: "18px", color: "#77838F" }}
                />
              </label>

              {/* <br></br>
              <p id="errorpincode"></p> */}
            </div>
          </div>
          <p className="register-agree">
            <p style={{ textDecoration: "underline", fontSize: "18px" }}>
              <input type="checkbox" className="register-checkbox"></input>I
              agree to Terms & Condition receiving marketing and promotional
              materials.
            </p>
          </p>

          {/* <p id="signup-error">
                {error
                  ? "Please Enter all the details and agree our terms and conditions before registering"
                  : ""}
              </p> */}

          <button onClick={postData}
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
    </>
  );
};

export default Register;
