import React from "react";
import logoImg from "../../../../public/logo.png"
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaListAlt, FaRecycle, FaUser, FaUsers } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { MdAddShoppingCart, MdRequestPage } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";
import useEmployee from "../../../Hooks/useEmployee";


const NavItem = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const { user, logout } = useAuth();
    const [isAdmin] = useAdmin();
    const [isEmployee] = useEmployee()

    console.log(isEmployee);

    const handleLogOut = () => {
        logout()
    }


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

            {!user ? <>
                {/* all login page without login */}
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

            </> : <>{
                isAdmin ? <>
                    {/* all admin page  */}
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
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 font-medium"
                    >
                        <MdAddShoppingCart className="text-xl"></MdAddShoppingCart>
                        <NavLink to='/assetList' className="flex items-center">
                            Asset List
                        </NavLink>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 font-medium"
                    >
                        <MdRequestPage className="text-xl"></MdRequestPage>
                        <NavLink to='/allRequestPage' className="flex items-center">
                            All Request
                        </NavLink>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 font-medium"
                    >
                        <FaUsers className="text-xl"></FaUsers>
                        <NavLink to='/addEmployee' className="flex items-center">
                            Add Employee
                        </NavLink>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 font-medium"
                    >
                        <FaUsers className="text-xl"></FaUsers>
                        <NavLink to='/myTeam' className="flex items-center">
                            My Team
                        </NavLink>
                    </Typography>
                </> : <>
                    {/* employee section  */}
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 font-medium"
                    >
                        <FaRecycle className="text-xl"></FaRecycle>
                        <NavLink to='/assetPage' className="flex items-center">
                            Request Asset
                        </NavLink>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 font-medium"
                    >
                        <FaListAlt className="text-xl"></FaListAlt>
                        <NavLink to='/myAssetPage' className="flex items-center">
                            My Asset Page
                        </NavLink>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 font-medium"
                    >
                        <FaUsers className="text-xl"></FaUsers>
                        <NavLink to='/myTeam' className="flex items-center">
                            My Team
                        </NavLink>
                    </Typography>
                </>
            }

            </>

            }

        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 text-black lg:px-8 lg:py-4 rounded-none">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    <img className="w-[150px]" src={logoImg} alt="" />
                </Typography>
                <div className="hidden lg:block">
                    {navList}
                </div>
                <div className="flex items-center gap-x-1">

                    {
                        user?.email && <div className="dropdown dropdown-end flex items-center">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-sm  btn-ghost bg-indigo-500 text-white">Logout</button>

                                </li>
                            </ul>
                        </div>

                    }


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
                        {user?.email && <button onClick={handleLogOut} className="btn btn-sm  btn-ghost bg-indigo-500 text-white">Logout
                        </button>}

                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}


export default NavItem;