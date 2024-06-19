import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import Header from "../components/Header/Header";
import { login, logout } from "../store/authSlice";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./index.css";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen font-sans flex flex-wrap content-between bg-[#7e22ce]">
{/*      // [#60a5fa] */}
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
