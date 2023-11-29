import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRequestAsset = (url) => {
    const axiosPublic = useAxiosPublic()

    // `/addItems?search=${search}`
    const { data: requestItems = [], isPending, refetch, } = useQuery({
        queryKey: ['requestItems'],
        queryFn: async () => {
            const res = await axiosPublic.get(url)
            return res.data;
        }
    })

    return [requestItems, isPending, refetch,]
};

export default useRequestAsset;