import { Outlet } from "react-router-dom";
import NavItem from "../Components/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavItem></NavItem>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;