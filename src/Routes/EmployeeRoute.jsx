import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useEmployee from "../Hooks/useEmployee";

const EmployeeRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isEmployee, isEmployeeLoading] = useEmployee()
    const location = useLocation()


    if (loading || isEmployeeLoading) {
        return <p>loading </p>
    }

    if (user && isEmployee) {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace> </Navigate>
};

export default EmployeeRoute;