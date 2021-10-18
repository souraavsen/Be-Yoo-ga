import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NavbarSection from "./Components/Navbar/NavbarSection";
import Signup from "./Components/SignUp/Signup";
import Signin from "./Components/SignIn/Signin";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <NavbarSection></NavbarSection>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <Route path='/signin'>
            <Signin></Signin>
          </Route>
          {/* for handeling unexpected routes */}
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
