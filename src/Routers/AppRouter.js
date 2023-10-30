import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";
// import LandingPage from "../Pages/LandingPage";
import LandingPage from "../components/Application/LoginScreen/LoginScreen";
import LandingPage2 from "../components/Application/SubLoginScreen/LoginScreen";
import RegisterScreen from "../components/Application/RegisterScreen/RegisterScreen";
// import Header from '../components/Application/LandingPage/Header';
import Home from "../Pages/UserEnd/Home";
import Emailsend from "../Pages/SendEmailPagesUI/Componets/EmailSand";
import Tender from "../components/UI/Tender/Tender";
import Navbar from "../components/landingpage/navbar/Navbar";
import LogoSection from "../components/landingpage/logosection/LogoSection";
import { Button } from "react-bootstrap";
import Copyright from "../components/landingpage/footer/Copyright";
import Activities from "../components/UI/Activities/Activities";
import Organisation from "../components/UI/AboutUs/Organisation";
import MissionandVision from "../components/UI/AboutUs/MissionandVision";
import Organogram from "../components/UI/AboutUs/Organogram";
import ContactDetailsHQDist from "../components/UI/AboutUs/ContactDetailsHQDist";
import DDUGKYTrainingTrades from "../components/UI/DDU-GKY/DDU-GKY-TrainingTrades";
import DdugkyPhysicalMilestone from "../components/UI/DDU-GKY/DdugkyPhysicalMilestone";
import DDUGKYTrainingSectors from "../components/UI/DDU-GKY/DDU-GKYTrainingSectors";
import Product from "../components/UI/Products/Product";
import ProductsBrochure from "../components/UI/Products/ProductsBrochure";
import ExhibitionCalender from "../components/UI/Exhibition/ExhibitionCalender";
import Reports from "../components/UI/Exhibition/Reports";
import NotFound from "../Pages/NotFound";

const AppRouter = () => {
  const [style, setStyle] = useState("bg-color2 ");
  const [zoomLevel, setZoomLevel] = useState(14); // start with 100% zoom level

  // useEffect(() => {
  //   const defaultFontSize = parseInt(getComputedStyle(document.documentElement).fontSize);
  //   setZoomLevel(defaultFontSize);
  // }, []);
  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 2); // increase zoom level by 25%
  };
  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 2); // decrease zoom level by 25%
  };

  const handleZoom = () => {
    setZoomLevel(14); // decrease zoom level by 25%
  };

  const changeStyle = () => {
    setStyle("bg-color2");
  };

  const changeStyle2 = () => {
    setStyle("bg-color");
  };

  const changeStyle3 = () => {
    setStyle("bg-color3");
  };
  const changeStyle4 = () => {
    setStyle("bg-color4");
  };
  const changeStyle5 = () => {
    setStyle("bg-color5 ");
  };

  const excludePaths = ["/error"];
  return (
    <>
      <Router>
        <span></span>
        
        <Switch>
          

          <Route
            exact
            path={["/Krishna", "/App"]}
            component={LandingPage}
          />
          <Route
            exact
            path={["/Login", "/Signin"]}
            component={LandingPage2}
          />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/Tender" component={Tender} />
          <Route path="/Activities" component={Activities} />
          <Route path="/Organisation" component={Organisation} />
          <Route path="/MissionandVision" component={MissionandVision} />
          <Route path="/Organogram" component={Organogram} />
          <Route
            path="/ContactDetailsHQDist"
            component={ContactDetailsHQDist}
          />
          <Route
            path="/DDUGKYTrainingTrades"
            component={DDUGKYTrainingTrades}
          />
          <Route
            path="/DdugkyPhysicalMilestone"
            component={DdugkyPhysicalMilestone}
          />
          <Route
            path="/DDUGKYTrainingSectors"
            component={DDUGKYTrainingSectors}
          />
          <Route path="/Product" component={Product} />
          <Route path="/ProductsBrochure" component={ProductsBrochure} />
          <Route path="/ExhibitionCalender" component={ExhibitionCalender} />
          <Route path="/Reports" component={Reports} />
          <Route path="/Emailsend" component={Emailsend} />

          <Route path="/error" component={NotFound} />
      
          <Redirect to="/error" />
        </Switch>

       
      </Router>
    </>
  );
};

export default AppRouter;
