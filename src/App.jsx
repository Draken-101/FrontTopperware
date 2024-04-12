import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { AdminEntrepreneurs } from "./Pages/AdminEntrepreneurs/AdminEntrepreneurs";
import { AdminProducts } from "./Pages/AdminProducts/AdminProducts";
import { useEffect, useState } from "react";
import { PrivateRoute } from "./Components/Atoms/PrivateRoute";
import { UserPage } from "./Pages/UserPage/UserPage";
function App() {
  const [token, setToken] = useState('');
  useEffect(() => {
    if (token) {
      fetch('api/products/post', {
        headers:{
          atentify: token
        },
        body: JSON.stringify({
          a:"a"
        })
      }).then(res => res.json()).then((data) => {
        data.body
      })
    }
    const newToken = localStorage.getItem('token');
    if (newToken) {
      setToken(newToken);
    }
  }, []);
  document.title = "Topperware";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/User" element={<UserPage/>}/>

        <Route path="/AdminProducts" element={
            <AdminProducts />
        } />
        <Route path={'/AdminEntrepreneurs'} element={<AdminEntrepreneurs />}/>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
