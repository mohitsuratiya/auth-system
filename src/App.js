import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./component/Nav.js";
import Home from "./component/Home.js";
import About from "./component/About.js";
import Login from "./component/Login.js";
import Signup from "./component/Signup.js";

function App() {
  return (
    <>
      <Router>
          <Nav/>
          <div className='container'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Signup">
            <Signup/>
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
