import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
