import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAssetList = (url) => {
    const axiosPublic = useAxiosPublic()

    // `/addItems?search=${search}`
    const { data: allItems = [], isPending, refetch, } = useQuery({
        queryKey: ['allItems'],
        queryFn: async () => {
            const res = await axiosPublic.get(url)
            return res.data;
        }
    })

    return [allItems, isPending, refetch,]
};

export default useAssetList;