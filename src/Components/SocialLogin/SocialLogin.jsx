import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${result.user.displayName} Login Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
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