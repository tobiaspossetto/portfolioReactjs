
import './App.css';
import AboutMe from './components/AboutMe/AboutMe'

import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (



    <Router  className="App">
      <Navbar/>


      <Switch>


        <Route exact path={"/"} component={AboutMe} exact/>
        <Route exact path={"/skills"} component={Skills} exact />
        <Route exact path={"/portfolio"} component={Portfolio} exact/>
       

        <Route path={"*"} component={AboutMe} />

      </Switch>


    </Router>



  );
}

export default App;
