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
                element: <Payment></Payment>
            },
            {
                path: "/addAsset",
                element: <AddAsset></AddAsset>
            },
            {
                path: "/assetList",
                element: <AssetList></AssetList>
            },
            {
                path: "/updateItem/:id",
                element: <UpdateItem></UpdateItem>,
            },
            {
                path: "/addEmployee",
                element: <AddEmployee></AddEmployee>,
            },
            {
                path: "/allRequestPage",
                element: <AllRequestPage></AllRequestPage>,
            },
            {
                path: "/myTeam",
                element: <MyTeam></MyTeam>//ata sobai dekhbe
            },

            //employees route
            {
                path: "/assetPage",
                element: <AssetPage></AssetPage>
            },
            {
                path: "/requestPage/:id",
                element: <RequestPage></RequestPage>
            },
            {
                path: "/myAssetPage",
                element: <MyAssetPage></MyAssetPage>
            },
        ]
    },
]);


export default router