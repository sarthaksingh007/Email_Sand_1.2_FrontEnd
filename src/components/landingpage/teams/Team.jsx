import { useSelector,useDispatch } from "react-redux";
import "./team.css";
import {
  listOfficerProfileDetails,
} from "../../../Redux/actions/Content Management/officerProfileDetailsActions";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const Team = () => {
  const dispatch = useDispatch();
  const history = useHistory();


 
  const officerProfileDetailList = useSelector(
    (state) => state.officerProfileDetailList
  );
  const {  officerProfileDetails } = officerProfileDetailList;
  
  
  useEffect( ()  => {
    dispatch(listOfficerProfileDetails());
  
  }, [
    dispatch,
   
  ]);

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(to bottom, #5f2c82, #49a09d)",
      }}
     
    >


    
      <div  className="cards_wrapper">
      {officerProfileDetails &&
        officerProfileDetails  .slice()
        .sort((a, b) => a.serial.localeCompare(b.serial))
        .filter(item => item.publish_status !== true).map((officerProfileDetail, i) => (
          <div  key={officerProfileDetail._id}>
            {/* first */}
            <div className="profile_card heightcard">
              <div className="profile_card_img">
                <img src={officerProfileDetail.photo} alt="" />
              </div>
              <div class="profile_card_desc">
                <h1> {officerProfileDetail.officername}</h1>

                <p class=""> {officerProfileDetail.designation}</p>
               
              </div>
            </div>

            

            
          </div>
        ))}
        </div>
    </section>
  );
};
export default Team;
