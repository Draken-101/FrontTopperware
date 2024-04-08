import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { UserPage } from "./Pages/UserPage/UserPage";
import { AdminEntrepreneurs } from "./Pages/AdminEntrepreneurs/AdminEntrepreneurs";
import { AdminProducts } from "./Pages/AdminProducts/AdminProducts";
function App() {
  document.title = "Topperware";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AdminProducts" element={<AdminProducts/>}/>
        <Route path="/AdminEntrepreneurs" element={<AdminEntrepreneurs/>}/>
        <Route path="/User" element={<UserPage/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
