import React, { useState } from "react";
import headerLogo from "../../assets/images/header-logo.png";

function DashboardPart() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <div className={`container ${inactive ? "inactive" : ""}`}></div>
      <div>
        <div className=" d-flex justify-content-center align-items-center align-item-center mt-15">
          <div className="">
            <a href="/#">
              <img
                src="https://email.uplers.com/blog/wp-content/uploads/2022/07/1-Signatures-blog.gif"
                class="w-25"
                alt=""
               
              />{" "}
            </a>
            <marquee
              behavior=""
              
              direction=""
              
              style={{
                color: "black",
                fontSize: "25px",
                marginTop: "-13px",
                fontFamily: "Brush Script MT",
              }}
            >
              Creating Competence and Email Sending Platform
            </marquee>
          </div>
        </div>
        <div class="row g-0 bg-light position-relative ">
         
          <div class="col-md-12 w-50 p-4 ps-md-0 test-center d-flex align-items-center">
           
            <a href="#" class="stretched-link">
              {/* Go somewhere */}
            </a>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default DashboardPart;
