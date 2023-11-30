import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://asset-management-server-one.vercel.app',
    // baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;
