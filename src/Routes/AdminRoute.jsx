import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { Circles } from "react-loader-spinner";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()


    if (loading || isAdminLoading) {
        return (<div className="flex justify-center items-center w-full h-[300px] bg-white">
            <Circles
                height="80"
                width="80"
                color="indigo"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /> </div>)


    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/adminLogin' state={{ from: location }} replace> </Navigate>
};

export default AdminRoute;