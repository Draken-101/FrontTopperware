import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { AdminEntrepreneurs } from "./Pages/AdminEntrepreneurs/AdminEntrepreneurs";
import { AdminProducts } from "./Pages/AdminProducts/AdminProducts";
import { useEffect, useState } from "react";
import { PrivateRoute } from "./Components/Atoms/PrivateRoute";
import { UserTop } from "./Pages/UserTop/UserTop";
import { Entrepreneurs } from "./Datos/Datos.Entrepreneurs";
import { Products } from "./Datos/Datos.Products";
import { ProductsStyles } from "./Datos/Datos.ProductsStyles";
import { UserShop } from "./Pages/UserShop/UserShop";
function App() {
  const [entrepreneurs, setEntrepreneurs] = useState([...Entrepreneurs()]);
  const [entrepreneurTop1, setEntrepreneurTop1] = useState({...Entrepreneurs().filter((entrepreneur) => entrepreneur.top == 1)});
  const [products, setProducts] = useState([...Products()]);
  const [productsStyles, setProductsStyles] = useState([...ProductsStyles()]);
  const [token, setToken] = useState('');
  useEffect(() => {
  }, []);
  document.title = "Topperware";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/UserTop" element={ <UserTop Entrepreneurs={entrepreneurs} EntrepreneurTop1={entrepreneurTop1}/> }/>
        <Route path="/UserShop" element={ <UserShop Products={products} ProductsStyles={productsStyles} EntrepreneurTop1={entrepreneurTop1}/> }/>
        <Route path="/AdminProducts" element={<AdminProducts />} />
        <Route path={'/AdminEntrepreneurs'} element={<AdminEntrepreneurs />}/>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
