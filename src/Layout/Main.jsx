import { Outlet } from "react-router-dom";
import NavItem from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavItem></NavItem>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;