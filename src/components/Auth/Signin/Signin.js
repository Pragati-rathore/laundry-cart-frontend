import React from "react";
import { useState } from "react";
// import {useHistroy} from "react-router-dom"
// import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  // const histroy=useHistroy()
  const [username, setEmail] = useState("");
  const [password,setPass]=useState("")
  const loginUser= async (e)=>{
    e.preventDefault();
     const res= await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },body:JSON.stringify({
        username,
        password
      })
     })
   const data= await res.json()
   console.log(data)
     if(res.status=== 400 || !data){
         window.alert("Invaid Emaillllllllll")
     }else{
      window.alert("Login Successfull")
      // histroy.push("/")
     }
  }
  return (
    <>
      <div className="">
        <div className="">
          <h1 className="">Laundry Service</h1>
          <p className=""></p>
          <p className=""></p>
          <button>Register</button>
        </div>
        <div className="">
          <p className="">SIGN IN</p>
          <form method="POST" className="">
            <label class="">
            
              <input 
                style={{ fontSize: "18px", color: "#77838F" }}
                value={username}
                onChange={(e)=>{setEmail(e.target.value)}}
                type="text"
                placeholder="Email"
              />
            </label>
            <p></p>
            <br></br>
            <br></br>
            <label style={{ display: "flex" }} class="custom-field two">
              <input
                style={{ fontSize: "18px", color: "#77838F" }}
                value={password}
                onChange={(e)=>{setPass(e.target.value)}}
                placeholder="Password"
              />
            </label>

            <p style={{ fontSize: "17px", fontWeight: 500 }}></p>

            <button onClick={loginUser} >Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
