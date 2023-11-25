import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    // const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate();

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                // const userInfo = {
                //     email: result?.user?.email,
                //     name: result?.user?.displayName,
                // }
                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         console.log(res.data);
                //         navigate('/')
                //     })
            })
    }

    return (
        <div className="mt-5">

            <div>
                <button onClick={handleGoogle} className="btn w-full border-2 border-blue-700 flex gap-3 items-center justify-center text-2xl font-bold py-3 ">
                    <FaGoogle></FaGoogle> Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;