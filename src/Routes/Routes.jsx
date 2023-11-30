import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import AdminLogin from "../Pages/AdminLogin/AdminLogin";
import EmployeeLogin from "../Pages/EmployeeLogin/EmployeeLogin";
import Payment from "../Pages/Payment/Payment";
import AddAsset from "../Pages/AdminPages/AddAsset/AddAsset";
import AssetList from "../Pages/AdminPages/AssetList/AssetList";
import UpdateItem from "../Pages/AdminPages/UpdateItem/UpdateItem";
import AddEmployee from "../Pages/AdminPages/AddEmployee/AddEmployee";
import MyTeam from "../Pages/AdminPages/MyTeam/MyTeam";
import RequestPage from "../Pages/EmployeePages/RequestPage/RequestPage";
import AssetPage from "../Pages/EmployeePages/AssetPage/AssetPage";
import MyAssetPage from "../Pages/EmployeePages/MyAssetPage/MyAssetPage";
import AllRequestPage from "../Pages/AdminPages/AllRequestPage/AllRequestPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import EmployeeRoute from "./EmployeeRoute";


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

            //admin route
            {
                path: "/payment",
                element: <AdminRoute>  <Payment></Payment> </AdminRoute>
            },
            {
                path: "/addAsset",
                element: <AdminRoute><AddAsset></AddAsset> </AdminRoute>
            },
            {
                path: "/assetList",
                element: <AdminRoute><AssetList></AssetList> </AdminRoute>
            },
            {
                path: "/updateItem/:id",
                element: <AdminRoute><UpdateItem></UpdateItem> </AdminRoute>
            },
            {
                path: "/addEmployee",
                element: <AdminRoute> <AddEmployee></AddEmployee> </AdminRoute>,
            },
            {
                path: "/allRequestPage",
                element: <AdminRoute> <AllRequestPage></AllRequestPage> </AdminRoute>
            },
            {
                path: "/myTeam",
                element: <PrivateRoute> <MyTeam></MyTeam> </PrivateRoute>   //ata sobai dekhbe
            },

            //employees route
            {
                path: "/assetPage",
                element: <EmployeeRoute> <AssetPage></AssetPage> </EmployeeRoute>
            },
            {
                path: "/requestPage/:id",
                element: <EmployeeRoute> <RequestPage></RequestPage> </EmployeeRoute>
            },
            {
                path: "/myAssetPage",
                element: <EmployeeRoute> <MyAssetPage></MyAssetPage> </EmployeeRoute>
            },
        ]
    },
]);


export default router