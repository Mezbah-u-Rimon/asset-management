import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosAdmin from "./useAxiosAdmin";

const useAdmin = () => {
    const { user, loading } = useAuth()
    const axiosAdmin = useAxiosAdmin()


    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosAdmin.get(`/adminUsers/${user.email}`)
            return res.data?.admin;
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;