import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Login = () => {

    const navigate = useNavigate();
    const { signIn } = useAuth();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;


        signIn(email, password)
            .then(() => {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `Login Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                navigate("/")
            })
            .catch(err => {
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: err.message,
                    showConfirmButton: false,
                    timer: 3000
                });
            })


    }

    return (
        <div className="md:px-8 md:my-10 my-5 px-4">
            <Helmet>
                <title> Asset Management || Login</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex-1 -mt-5">
                    <img src="https://i.ibb.co/1Kmy8fx/undraw-Revenue-re-2bmg.png" alt="" />
                </div>

                <div className="relative mt-8 flex-1 flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none ml-5">
                    <h4 className="block text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Login
                    </h4>

                    <form onSubmit={handleSubmit(handleLogin)} className="mt-8 mb-2  w-3/4 ">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                />
                                {errors.email && <span className="text-red-600 mt-1">Email is required</span>}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}/,
                                    })}
                                    type="password"
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                />
                                {errors.password?.type === "required" && <span className="text-red-600 mt-1">Password is required </span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600 mt-1">Password must be 6 characters </span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600 mt-1">Password must be less then 20 characters </span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600 mt-1">Password must be 1 special characters </span>}

                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>

                        </div>

                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-700/20 transition-all hover:shadow-lg hover:shadow-blue-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Login Now
                        </button>
                        <p className="mt-4 block text-center font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
                            New here go to Employee Page ?
                            <Link to='/employeeLogin'
                                className="font-medium text-blue-700 transition-colors hover:text-blue-500"

                            >
                                Employee
                            </Link>
                        </p>

                        {/* social login  */}
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;