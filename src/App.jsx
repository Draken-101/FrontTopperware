import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { AdminEntrepreneurs } from "./Pages/AdminEntrepreneurs/AdminEntrepreneurs";
import { AdminProducts } from "./Pages/AdminProducts/AdminProducts";
import { UserTop } from "./Pages/UserTop/UserTop";
import { UserShop } from "./Pages/UserShop/UserShop";
import { ProductInfo } from "./Pages/Product/ProductInfo";
import { AdminStyles } from "./Pages/AdminStyles/AdminStyles";
import { ShoppingCar } from "./Pages/ShoppingCar/ShoppingCar";
import { Vender } from "./Pages/Vender/Vender";
import { Ticket } from "./Pages/Ticket/Ticket";
function App() {
  document.title = "Topperware";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/UserTop" element={ <UserTop /> }/>
        <Route path="/UserShop" element={ <UserShop/> }/>
        <Route path="/ShoppingCar" element={ <ShoppingCar/> }/>
        <Route path="/Product/:claveProduct" element={ <ProductInfo /> }/>
        <Route path="/AdminProducts" element={<AdminProducts  />} />
        <Route path="/AdminStyles/:clave" element={<AdminStyles  />} />
        <Route path='/AdminEntrepreneurs' element={<AdminEntrepreneurs />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Ticket" element={<Ticket/>} />
        <Route path="/Vender" element={<Vender />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
