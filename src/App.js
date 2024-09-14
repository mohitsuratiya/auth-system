import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
  
import Nav from './component/Nav.js';
import Home from './component/Home.js';
import About from './component/About.js';


function App() {
  return (
    <>
      <Router>
    <Nav/>
      <Switch>
          <Route exact path="/Home" >
          </Route>
          <Route exact path="/About" >
            <About/>
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;
