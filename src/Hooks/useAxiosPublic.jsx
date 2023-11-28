import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://asset-management-server-one.vercel.app',
    withCredentials: true,
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;
