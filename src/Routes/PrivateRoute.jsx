import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Circles } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
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
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    else {
        return children
    }
};

export default PrivateRoute;