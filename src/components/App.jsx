import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Reserving from "./Reserving.jsx";
import LoginSignup from "./LoginSignup.jsx";
import NoMatch from "./NoMatch.jsx";
import CallToAction from "./ui/CallToAction";

import theme from "./ui/Theme"; // default theme

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(false);

  const renderNoMatch = (routerData) => {
    setValue(-1); // don't highlight any tab
    return (
      <div>
        <NoMatch />
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />

        {
          //<div>HELLO WORLD</div>
        }
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                //value={value}
                setValue={setValue}
                //selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Route exact path="/contact" render={() => <h1>Contact Us</h1>} />

          <Route exact path="/call" render={() => <CallToAction />} />

          <Route
            exact
            path="/login"
            render={() => <LoginSignup setValue={setValue} />}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                //value={value}
                setValue={setValue}
                //selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path="/reserving" render={(props) => <Reserving />} />

          <Route render={renderNoMatch} />
        </Switch>

        <Footer
          //value={value}
          setValue={setValue}
          //selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
