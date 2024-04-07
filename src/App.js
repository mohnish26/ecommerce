import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import Nopage from "./pages/nopage/Nopage";
import Mystate from "./context/data/Mystate";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Productinfo from "./pages/productinfo/Productinfo";

function App() {
  return (
    <main className="">
      <Mystate>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<Nopage />} />
            <Route path="/product/:id" element={<Productinfo />} />
          </Routes>
        </Router>
      </Mystate>
    </main>
  );
}

export default App;
