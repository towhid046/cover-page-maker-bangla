import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer.jsx";
import Navbar from "../components/shared/Navbar/Navbar.jsx";
import usePageTracking from "../hooks/usePageTracking.js";
const Root = () => {
  usePageTracking();
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
