import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import ProductList from "./components/Menu";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import User from "./components/User";
import AdminRoutes from "./routes/adminRoutes";
import UserRoutes from "./routes/userRoutes";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
<Route index element={<Home />} />

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="menu" element={<ProductList />} />
        <Route path="login" element={<LogIn />} />
        <Route path="cart" element={<Cart />} />
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
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
