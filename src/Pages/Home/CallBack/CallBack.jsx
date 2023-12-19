import { Button } from "@material-tailwind/react";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";


const CallBack = () => {
    return (
        <div className="bg-gradient-to-l from-[#1766baf6] to-[#1717b73f] pt-20">
            <div className='w-full flex flex-col-reverse lg:flex-row justify-center items-center'>
                <div>
                    <img className="w-full" src="https://www.tpaim.eu/storage/2020/02/Asset-Management-1536x975.png" alt="" />
                </div>

                <div className='text-center w-full'>
                    <h1 className='text-5xl font-bold text-white pt-3 pb-7'>
                        Start Innovating Today
                    </h1>
                    <Link to='/' className='flex justify-center'>
                        <Button className='bg-indigo-600 text-white px-4 py-4 flex items-center gap-2 mb-10'>  <IoMdLogIn className="text-xl"></IoMdLogIn>Try Asset Management For Free </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CallBack;