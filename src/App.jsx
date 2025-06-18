// import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/CheckOut";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import User from "./components/User";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import OurSpecial from "./components/OurSpecial";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      {/* placed navbar to get all pages */}
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/special" element={<OurSpecial />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="" element={<User />} />
        {/* protected the admin route and admin */}
        <Route
          path="/admin"
          element={
            <AdminRoutes>
              <Admin />
            </AdminRoutes>
          }
        />
        <Route
          path="/user"
          element={
            <UserRoutes>
              <User />
            </UserRoutes>
          }
        />
      </Routes>
      {/* placed foooter to get  all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
