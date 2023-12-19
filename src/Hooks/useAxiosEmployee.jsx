import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

const axiosEmployee = axios.create({
    baseURL: 'https://asset-management-server-one.vercel.app',
    // baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosEmployee = () => {
    // const navigate = useNavigate()
    // const { logout } = useAuth()

    // axiosEmployee.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem('access_token')
    //     // console.log('request stopped by interceptors', token);
    //     config.headers.authorization = `Bearer ${token}`
    //     return config;
    // }, function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    // });

    // //interceptors response
    // axiosEmployee.interceptors.response.use(function (response) {
    //     return response
    // }, async (error) => {
    //     const status = error.response.status;
    //     if (status === 401 || status === 403) {
    //         await logout();
    //         navigate('/login')
    //     }
    //     return Promise.reject(error);
    // });

    return axiosEmployee
};

export default useAxiosEmployee;