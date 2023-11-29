import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useEmployee from "../Hooks/useEmployee";
import { Circles } from "react-loader-spinner";

const EmployeeRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isEmployee, isEmployeeLoading] = useEmployee()
    const location = useLocation()


    if (loading || isEmployeeLoading) {
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

    if (user && isEmployee) {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace> </Navigate>
};

export default EmployeeRoute;