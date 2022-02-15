import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "./components/Home";
// import { useEffect, useState } from "react";
// import axios from "axios";

function App() {
  // const [user, setUser] = useState({});

  // const fetchUser = async () => {
  //   const userData = await axios.get("/api/user")
  // }

  // useEffect(() => {
  //   fetchUser()
  // }, [fetchUser])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
