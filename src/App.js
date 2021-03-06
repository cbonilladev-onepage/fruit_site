import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Styles
import "./App.scss";
//components
import Header from "./components/header";
//Pages
import Home from "./pages/home";
import Model from "./pages/model";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path={process.env.PUBLIC_URL + '/'}
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/some/:id'}
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;