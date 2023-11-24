import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import AdminLogin from "../Pages/AdminLogin/AdminLogin";
import EmployeeLogin from "../Pages/EmployeeLogin/EmployeeLogin";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/employeeLogin",
                element: <EmployeeLogin></EmployeeLogin>
            },
            {
                path: "/adminLogin",
                element: <AdminLogin></AdminLogin>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    },
]);


export default router