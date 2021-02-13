
import './App.css';


import Home from './components/Home'
import Connexion from './components/Connexion'
import Signup from './components/SignUp'
import NotFound from './components/NotFound'
import Annonce from './components/Annonce'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
    

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
       <Route exact path="/connexion/creer-un-compte">
          <Signup/>
        </Route>
      <Route exact path="/connexion">
          <Connexion />
        </Route>
        <Route exact path="/deposer-une-annonce">
          <Annonce/>
        </Route>
      <Route  exact path="/">
          <Home />
        </Route>
        <Route path="/404"  ><NotFound/></Route>
       <Redirect to="/404" />
       
       
        
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;
