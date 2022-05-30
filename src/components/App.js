import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { useAuth } from "../hooks";
import { Home, Login, ProductDetails, Register } from "../pages";
import { Navbar, Footer } from "./";

function App() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/product/:productId">
            <Navbar />
            <ProductDetails />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
