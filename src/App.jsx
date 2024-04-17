import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { AdminEntrepreneurs } from "./Pages/AdminEntrepreneurs/AdminEntrepreneurs";
import { AdminProducts } from "./Pages/AdminProducts/AdminProducts";
import { useEffect, useState } from "react";
import { PrivateRoute } from "./Components/Atoms/PrivateRoute";
import { UserTop } from "./Pages/UserTop/UserTop";
import { getEntrepreneurs } from "./Datos/Datos.Entrepreneurs";
import { Products } from "./Datos/Datos.Products";
import { ProductsStyles } from "./Datos/Datos.ProductsStyles";
import { UserShop } from "./Pages/UserShop/UserShop";
import { ProductInfo } from "./Pages/Product/ProductInfo";
import { Car } from "./Datos/Datos.Car";
import { Tip } from "./Datos/Datos.Tips";
function App() {
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [car, setCar] = useState(new Car());
  const [entrepreneurTop1, setEntrepreneurTop1] = useState(null);
  const [tipActual, setTipActual] = useState(Tip);
  const [products, setProducts] = useState([...Products()]);
  const [productsStyles, setProductsStyles] = useState([...ProductsStyles()]);
  document.title = "Topperware";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/UserTop" element={ <UserTop Entrepreneurs={entrepreneurs} EntrepreneurTop1={entrepreneurTop1}/> }/>
        <Route path="/UserShop" element={ <UserShop Products={products} ProductsStyles={productsStyles} EntrepreneurTop1={entrepreneurTop1}/> }/>
        <Route path="/Product/:claveProduct" element={ <ProductInfo AgregarCarrito={(product) => setCar( car.car.push(product))} EntrepreneurTop1={entrepreneurTop1} Products={products} Styles={productsStyles}/> }/>
        <Route path="/AdminProducts" element={<AdminProducts  />} />
        <Route path={'/AdminEntrepreneurs'} element={<AdminEntrepreneurs tipActual={tipActual} />}/>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
