import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { UserPage } from "./Pages/UserPage/UserPage";
function App() {
  document.title = "Topperware";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
