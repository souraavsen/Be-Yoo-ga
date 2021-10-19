import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NavbarSection from "./Components/Navbar/NavbarSection";
import Signup from "./Components/SignUp/Signup";
import Signin from "./Components/SignIn/Signin";
import AllServices from "./Components/Services/AllServices";
import NotFound from "./Components/NotFound/NotFound";
import Events from "./Components/Events/Events";
import Resources from "./Components/Resources/Resources";
import AuthProvider from "./Context/AuthProvider";
import ServiceDetails from "./Components/Services/ServiceDetails";
import PrivateRoute from "./Components/SignIn/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <NavbarSection></NavbarSection>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/services'>
              <AllServices></AllServices>
            </PrivateRoute>
            <PrivateRoute path='/services-details/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/events'>
              <Events></Events>
            </PrivateRoute>
            <PrivateRoute path='/resources'>
              <Resources></Resources>
            </PrivateRoute>
            <PrivateRoute path='/resources'>
              <Resources></Resources>
            </PrivateRoute>
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
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
