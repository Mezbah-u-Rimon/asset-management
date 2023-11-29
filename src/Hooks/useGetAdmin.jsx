import { useQuery } from "@tanstack/react-query";
import useAxiosAdmin from "./useAxiosAdmin";


const useGetAdmin = (email) => {
    const axiosAdmin = useAxiosAdmin()

    const { data: allAdmin = {}, } = useQuery({
        queryKey: ['allAdmin'],
        queryFn: async () => {
            const res = await axiosAdmin.get(`/adminUsers/${email}`)
            return res.data.user;
        }
    })

    return { allAdmin }
};

export default useGetAdmin;