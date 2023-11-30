import { Button } from "@material-tailwind/react";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";


const CallBack = () => {
    return (
        <div className="bg-gradient-to-l from-[#010182fd] to-[#0303813f] pt-20">
            <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
                <div>
                    <img className="w-full" src="https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2023/08/CTA-image2.webp" alt="" />
                </div>

                <div className='text-center w-full md:w-3/4 '>
                    <h1 className='text-5xl  font-bold text-white pt-3 pb-7'>
                        Start Innovating Today
                    </h1>
                    <Link to='/' className='flex justify-center'>
                        <Button className='bg-indigo-600 text-white px-4 py-4 flex items-center gap-2'>  <IoMdLogIn className="text-xl"></IoMdLogIn>Try Asset Management For Free </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CallBack;