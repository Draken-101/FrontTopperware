import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { AdminEntrepreneurs } from "./Pages/AdminEntrepreneurs/AdminEntrepreneurs";
import { AdminProducts } from "./Pages/AdminProducts/AdminProducts";
import { UserTop } from "./Pages/UserTop/UserTop";
import { UserShop } from "./Pages/UserShop/UserShop";
import { ProductInfo } from "./Pages/Product/ProductInfo";
function App() {
  document.title = "Topperware";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/UserTop" element={ <UserTop /> }/>
        <Route path="/UserShop" element={ <UserShop/> }/>
        <Route path="/Product/:claveProduct" element={ <ProductInfo /> }/>
        <Route path="/AdminProducts" element={<AdminProducts  />} />
        <Route path='/AdminEntrepreneurs' element={<AdminEntrepreneurs />}/>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
