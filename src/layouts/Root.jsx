import {Outlet} from "react-router-dom";
import Nav from "../components/Navbar/Nav";

const Root = () => {
  return (
    <div>
      <div className="h-20">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;