import React, { useState } from "react";
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import { AuthContext, UserContext } from "./utils/AuthContext";

function App() {
  const [value, setValue] = useState();

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuthorized"));

  return (
    <div className="App">
      <Switch>
        <Router>
          <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <UserContext.Provider value={{ value, setValue }}>
              <Route path="/" exact component={Login} />
              <PrivateRoute
                path="/dashboard"
                component={Dashboard}
                isAuth={isAuth}
              />
            </UserContext.Provider>
          </AuthContext.Provider>
        </Router>
      </Switch>
    </div>
  );
}

export default App;
