import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
