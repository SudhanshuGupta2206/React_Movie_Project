
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Addmovie from './components/Addmovie';
import Moviedetails from './components/Moviedetails';
import Notfound from './components/Notfound';
import Searchpage from './components/Searchpage';
import Home from './components/Home';
function App() {
  return (
    

      <Router>
     <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/add">
          <Addmovie/>
        </Route>
        <Route  path="/moviedetails:id">
          <Moviedetails/>
        </Route>
        <Route  path="/search:searchval">
          <Searchpage/>
        </Route>
        <Route  path="*">
          <Notfound/>
        </Route>
      </Switch>
     </div>
    </Router> 
    )
  
}

export default App;
