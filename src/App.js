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
import Dasboard from "./pages/admin/dasboard/Dasboard";
import Addproduct from "./pages/admin/pages/Addproduct";
import Updateproduct from "./pages/admin/pages/Updateproduct";
import {
  AdminProtectedRoute,
  UserProtectedRoute,
} from "./components/protectedRoute/Protectedroute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>
      <Mystate>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route
              exact
              path="/dashboard"
              element={
                <AdminProtectedRoute>
                  <Dasboard />
                </AdminProtectedRoute>
              }
            />
            <Route
              exact
              path="/order"
              element={
                <UserProtectedRoute>
                  <Order />
                </UserProtectedRoute>
              }
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/product/:id" element={<Productinfo />} />
            <Route
              exact
              path="/addproduct"
              element={
                <AdminProtectedRoute>
                  <Addproduct />
                </AdminProtectedRoute>
              }
            />
            <Route
              exact
              path="/updateproduct"
              element={
                <AdminProtectedRoute>
                  <Updateproduct />
                </AdminProtectedRoute>
              }
            />
            <Route path="/*" element={<Nopage />} />
          </Routes>
        </Router>
        <ToastContainer />
      </Mystate>
    </main>
  );
}

export default App;
