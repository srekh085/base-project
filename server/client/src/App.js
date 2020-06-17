import React from "react";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import LogIn from "./Pages/LogIn/LogIn";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route component={NavBar} /> */}
        <Switch>
          <Route exact path="/signUp/:role" component={SignUp} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/login/:role" component={LogIn} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/" component={LogIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
