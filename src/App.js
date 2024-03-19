import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import { Auth } from "./Component/Auth";
import Admin from "./Component/Admin";
import Navbar from "./Component/Navbar";
import { Service } from "./Component/Service";

function App() {
  return (
    <div className="App">
      <Auth>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/admin" element={<Admin/>} />
          <Route path="/service" element={<Service/>} />
        </Routes>
      </Auth>
    </div>
  );
}

export default App;
