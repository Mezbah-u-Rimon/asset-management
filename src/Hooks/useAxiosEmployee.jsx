import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

const axiosEmployee = axios.create({
    baseURL: 'http://localhost:5000',

})

const useAxiosEmployee = () => {
    // const navigate = useNavigate()
    // const { logout } = useAuth()

    // axiosAdmin.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem('access_token')
    //     // console.log('request stopped by interceptors', token);
    //     config.headers.authorization = `Bearer ${token}`
    //     return config;
    // }, function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    // });

    // //interceptors response
    // axiosAdmin.interceptors.response.use(function (response) {
    //     return response
    // }, async (error) => {
    //     const status = error.response.status;
    //     // console.log("kharaf nehi khelna", status);
    //     if (status === 401 || status === 403) {
    //         await logout();
    //         navigate('/login')
    //     }
    //     return Promise.reject(error);
    // });

    return axiosEmployee
};

export default useAxiosEmployee;