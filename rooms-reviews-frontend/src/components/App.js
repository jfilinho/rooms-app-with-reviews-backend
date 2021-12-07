import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContextComponent } from "../context/autContext";

import Signup from "../pages/signup";
import Login from "../pages/login";
import Home from "../pages/home";
import ProtectedRoute from "./protectedRoute";
import Navbar from "./navbar"


function App() {
  return (
    <div>
            <Navbar/>

      <div className="container mt-5">

      <div>
         <AuthContextComponent>
          
          <Routes>
             <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/home" element={<ProtectedRoute component={Home} />} />
          </Routes>
        </AuthContextComponent>
      </div>
    </div>
    </div>
  );
}

export default App;
