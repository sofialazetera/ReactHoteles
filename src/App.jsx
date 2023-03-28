import { Outlet } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorURL, setErrorURL] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const navigateForward = () => navigate();

  function handleSubmit(e) {
    e.preventDefault();
    setLoggedIn(true);
    navigateForward("./home");
  }

  function handleOnChangeName(e) {
    setName(e.target.value);
  }
  function handleOnChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="App">
      <h1>Despegar.com</h1>

      {!loggedIn ? 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={handleOnChangeName}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleOnChangeEmail}
          />
          <button type="submit">Login</button>
        </form>
       : 
        <Outlet />
      }
    </div>
  );
}

export default App;
