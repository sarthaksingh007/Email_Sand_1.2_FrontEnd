import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { listdocuments } from "../../../Redux/actions/Manage Application/documentsActions";
import { listTenders } from "../../../Redux/actions/Manage Application/tendersActions";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./About.css";
import axios from "axios";
import { APIURL } from "../../../Redux/APIURL";
const About = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const history = useHistory();
  const documentList = useSelector((state) => state.documentList);
  const tenderList = useSelector((state) => state.tenderList);
  const { documents } = documentList;
  const { tenders } = tenderList;
  
  console.log("d" + documents);

  useEffect(() => {
    dispatch(listdocuments());
  }, [dispatch]);

  const getData = async () => {
    try {
      const response = await axios.get(`${APIURL}/api/tenders/`)
     
      setData(response.data.tenders);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    getData()

  },[])
  return (
    <div className="about">
    
      <section
        style={{ background: "linear-gradient(to top, #5f2c82, #49a09d);" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="box p-2 heightcard">
                <h5 style={{ color: "yellow" }}>Mission/Vission</h5>
                <p class="text-white">
                 
                    <ListGroup className="list-group-flush ">
                      {documents &&
                        documents.reverse().filter(item => item.publish_status !== true).map((document, i) => (
                          <div
                            key={document._id}
                            className="fs-16 text-white"
                            style={{
                              backgroundColor: "transparent",
                            }}
                          >
                            {document.headline}
                            <br />
                            <samp className="fs-12 text-white">
                              {document.description}
                            </samp>
                          </div>
                        ))}
                    </ListGroup>
             
                </p>
                <button className="button px-4 py-1 mt-4" style={{verticalAlign: "middle"}}><span> Read more </span></button>

              </div>
            </div>
            <div class="col-md-4">
              <div class="box p-2  heightcard">
                <h5 style={{ color: "yellow" }}>Tender/Advertisement</h5>
                <Card.Text >
                  
                    <ListGroup className="list-group-flush ">
                      {data.length > 0 &&
                        data.reverse().filter(item => item.publish_status === "set").map((item, i) => (
                          <div
                            key={item._id}
                            className="fs-16 text-white"
                            style={{
                              backgroundColor: "transparent",
                            }}
                          >
                            {item.tender_headline}
                            

                            <br />
                            <samp
                              clsampssName="fs-12 text-primary p-1"
                              style={{ color: "lightblue" }}
                            >
                              {item.closing_date.substring(0, 10)}
                            </samp>
                          </div>
                        ))}
                    </ListGroup>
               
                </Card.Text>
                <button className="button px-4 py-1 mt-4" style={{verticalAlign: "middle"}}><span> Read more </span></button>

              </div>
            </div>
            <div class="col-md-4">
              <div class="box p-2 heightcard">
                <h5 style={{ color: "yellow" }}>Achievements</h5>
              
                  <p class="text-white">
                    &#x2022; Outlet at Bhubaneswar Air Port
                    <br /> &#x2022; Outlet at Bhubaneswar Air Port
                    <br /> &#x2022; COFFEE TABLE
                    <br /> &#x2022; Rural Mason Training Programme
                  </p>
                
                <button className="button px-4 py-1 mt-4" style={{verticalAlign: "middle"}}><span> Read more </span></button>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
