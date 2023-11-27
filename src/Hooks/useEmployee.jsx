import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosEmployee from "./useAxiosEmployee";


const useEmployee = () => {
    const { user, loading } = useAuth()
    const axiosEmployee = useAxiosEmployee()

    const { data: isEmployee, isPending: isEmployeeLoading } = useQuery({
        queryKey: [user?.email, 'isEmployee'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosEmployee.get(`/employeeUsers/${user.email}`)
            return res.data?.employee;
        }
    })

    return [isEmployee, isEmployeeLoading]
};

export default useEmployee