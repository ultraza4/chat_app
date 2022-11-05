import Register from "./pages/Register";
import Login from "./pages/Login";
import "./style.scss";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element = {<Home />} />
            <Route path="login" element = {<Login />} />
            <Route path="register" element = {<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
