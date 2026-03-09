import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Features from "./pages/Features"
import Security from "./pages/Security"
import Register from "./pages/Register"

function Router(){
 return(
  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/features" element={<Features/>}/>
    <Route path="/security" element={<Security/>}/>
    <Route path="/register" element={<Register/>}/>

  </Routes>
 )
}

export default Router
