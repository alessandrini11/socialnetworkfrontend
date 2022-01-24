import './App.css';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Login from './pages/Login'
import {
  Switch,
  Route
} from "react-router";

function App() {
  return (
      <Switch>
          <Route path="/register" component={Register}>
            
          </Route>
          <Route path="/login" component={Login}>
            
          </Route>
          <Route path="/profile/:username" component={Profile}>
            
          </Route>
          <Route exact path="/" component={Home}>
            
          </Route>
      </Switch>
  );
}

export default App;
