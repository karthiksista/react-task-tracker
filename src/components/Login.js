import React, { useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";

import { BASE_URL } from "../utils/URL";
import { AuthContext, UserContext } from "../utils/AuthContext";

export default function Login() {
  const history = useHistory();

  const { value, setValue } = useContext(UserContext);

  const { isAuth, setIsAuth } = useContext(AuthContext);

  if (isAuth) {
    history.push("/dashboard");
  }
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const { ID, NAME } = event.target.elements;
        const apiKey = ID.value;
        const name = NAME.value;
        const response = await axios.post(`${BASE_URL}`, { name, apiKey });
        setValue(response.data.token.name);
        setIsAuth(true);
        localStorage.setItem("jwt", response.data.token.token);
        localStorage.setItem("userName", response.data.token.name);
        localStorage.setItem("isAuthorized", true);
        history.push("/dashboard");
      } catch (error) {
        setIsAuth(false);
        setValue(null);
        alert(error.msg);
      }
    },
    [history]
  );

  return (
    <div className="loginWrapper">
      <form onSubmit={handleSubmit} className="form-block">
        <span className="login-text">Login</span>

        <div className="login-forms">
          <input
            className="input-block"
            type="text"
            name="ID"
            placeholder="ID"
          />
        </div>

        <div className="login-forms">
          <input
            className="input-block"
            type="text"
            name="NAME"
            placeholder="NAME"
          />
        </div>

        <Button className="login-button" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
