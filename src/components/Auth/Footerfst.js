import React from "react";
import "./FooterAuth.css";




const Footer = () => {
  return (
    <> 
     <div className='main-containerp3'>
        <div className="boxp3">
            <h4>ABOUT US</h4>
            <h6>Doorstep Wash & DryClean Service</h6>
        </div>

        <div className="boxp3">
            <h4>Home</h4>
            <h6>Sign In</h6>
            <h6>Register</h6>
        </div>

        <div className="boxp3">
            <h4>Pricing</h4>
        </div>

        <div className="boxp3">
            <h4>Career</h4>
            <h6>Blogs</h6>
            <h6>Create</h6>
        </div>

        <div className="boxp3">
            <h4>Contact</h4>
        </div>

        <div className="boxp3">
            <h4>SOCIAL MEDIA</h4>
            {/* <div className="socialImgs" >
                <div className='logop3'><img src="../../../public/images/facebook.jpg" alt="facebook" /></div>
                <div className='logop3'><img src="../../../public/images/instagram.jpg" alt="instagram" /></div>
                <div className='logop3'><img src="../../../public/images/linkedin.jpg"  alt="linkedin" /></div>
            </div> */}
        </div>
    </div>
    </>
  );
};
export default Footer;
