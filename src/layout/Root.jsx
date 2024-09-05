import { Outlet } from "react-router-dom";
import Footer from "../TemComponents/shared/Footer/Footer.jsx";
import Navbar from "../TemComponents/shared/Navbar/Navbar.jsx";
const Root = () => {
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
