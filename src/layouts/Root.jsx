import {Outlet} from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="h-20">
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
