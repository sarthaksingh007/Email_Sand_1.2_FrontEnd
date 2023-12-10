import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppRouter from "./AppRouter";
import Home from "../components/common/SendEmailPagesUI/Componets/Nav.js"
// import Home from "../Pages/UserEnd/Home";
import NotFound from "../Pages/NotFound";

const IndexRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={["/", "/Home", "/home"]} component={Home} />

          <AppRouter />
          
        </Switch>
      </Router>
    </>
  );
};

export default IndexRouter;
