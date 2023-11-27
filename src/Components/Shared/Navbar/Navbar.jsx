import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";


const NavItem = () => {
    const [openNav, setOpenNav] = React.useState(false);


    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <FaHome className="text-xl"></FaHome>
                <NavLink to='/' className="flex items-center">
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <FaUsers className="text-xl"></FaUsers>
                <NavLink to='/employeeLogin' className="flex items-center">
                    Join as Employee
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <FaUser className="text-xl"></FaUser>
                <NavLink to='/adminLogin' className="flex items-center">
                    Join as HR/Admin
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <IoMdLogIn className="text-xl"></IoMdLogIn>
                <NavLink to='/login' className="flex items-center">
                    Login
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <MdPayment className="text-xl"></MdPayment>
                <NavLink to='/payment' className="flex items-center">
                    Payment
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <MdAddShoppingCart className="text-xl"></MdAddShoppingCart>
                <NavLink to='/addAsset' className="flex items-center">
                    Add Asset
                </NavLink>
            </Typography>

        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 text-black lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    Material Tailwind
                </Typography>
                <div className="hidden lg:block">
                    {navList}
                </div>
                <div className="flex items-center gap-x-1">
                    <Button variant="text" size="sm" className="hidden lg:inline-block">
                        <span>Log In</span>
                    </Button>
                    <Button
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block"
                    >
                        <span>Sign in</span>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}


export default NavItem;