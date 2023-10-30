import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ErrorMessage from "../../ErrorMessage";
import { APIURL } from "../../../Redux/APIURL";

import Loading from "../../Loading";
import { createBannerAction } from "../../../Redux/actions/Manage Application/bannersActions";

const AddManageBanner = () => {
  const params = useParams();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [sl_no, setsl_no] = useState("");
  const [caption, setcaption] = useState("");
  const [banner, setBanner] = useState("");
  const [publish_status, setpublish_status] = useState("unset");
  const [picMessage, setPicMessage] = useState(null);
  const dispatch = useDispatch();

  const bannerCreate = useSelector((state) => state.bannerCreate);
  const { loading, error, banners } = bannerCreate;

  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);

   

    if (
      pics.type === "application/pdf" ||
      pics.type === "application/msword" ||
      pics.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      pics.type === "image/jpeg" ||
      pics.type === "image/png"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "ormaspreset");
      data.append("cloud_name", "oramas");
      fetch("https://api.cloudinary.com/v1_1/oramas/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setBanner(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image jepg and png File...");
    }
  };

  const resetHandler = () => {
    setsl_no("");
    setBanner("");
    setcaption("");
    setpublish_status("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createBannerAction(sl_no, caption, banner, publish_status));
    if (!sl_no || !caption || !banner || !publish_status) return;

    resetHandler();
    history.push("/hub/ManageBanner");
  };

 

  useEffect(() => {}, []);

  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/ManageBanner");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div class="magazin-container">
         
            <h3 className="fs-19">
              <i class="bi bi-geo-alt-fill"></i>
              <span> Home / Manage Link / Global Link /</span>Add ManageBanner
            </h3>
          <p className="text-danger d-flex justify-content-end">
            (*) Indicates Mandatory Fields
          </p>
          <hr />
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          <form class="row g-3 d-flex justify-content-between">
            <div class="row d-flex p-1">
              <div class="col-md-2">
                <label for="inputState" class="form-label">
                  Sl. No. of Link
                </label>
              </div>
              <div class="col-md-3 d-flex">
                <select
                  value={sl_no}
                  onChange={(e) => setsl_no(e.target.value)}
                  style={{ border: "solid 1px #000" }}
                  name="sl_no"
                  id="inputState"
                  class="form-select p-1"
                >
                  <option selected>Choose...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <p className="text-danger p-1">(*) </p>
              </div>
            </div>
            <div class="row d-flex p-1">
            <div class="col-md-2">
              <label for="inputEmail4" class="form-label">
                Caption
              </label>
              </div>
              <div class="col-md-3 d-flex">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Caption"
                value={caption}
                required={true}
                onChange={(e) => setcaption(e.target.value)}
              />
              <p className="text-danger p-1">(*) </p>
            </div>
            </div>
            {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}
            <div class="row d-flex p-1">
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Upload Image
              </label>
              </div>
              <div class="col-md-3 d-flex">
              <input
                type="file"
                class="form-control p-1"
                aria-label="file example"
                required
                onChange={(e) => postDetails(e.target.files[0])}
              />
              <p className="text-danger p-1">(*) </p>
            </div>
            </div>
            <div class="row d-flex p-1">
              <div class="col-md-2">
                <label for="inputState" class="form-label">
                  Publish Status
                </label>
              </div>
              <div class="col-md-3 d-flex">
                <select
                  name="publish_status"
                  id="inputState"
                  class="form-select p-1"
                  style={{ border: "solid 1px #000" }}
                  value={publish_status}
                  onChange={(e) => setpublish_status(e.target.value)}
                >
                  <option selected>Choose...</option>
                  <option>set </option>
                  <option> unset</option>
                </select>
                <p className="text-danger p-1">(*) </p>
              </div>
            </div>
          </form>
          {loading && <Loading size={50} />}
          <div className="btn">
            
              <button
                type="submit"
                className="Submit-btn"
              
              >
                Submit
              </button>
          
            <button onClick={Cancel} type="submit" className="Cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddManageBanner;
