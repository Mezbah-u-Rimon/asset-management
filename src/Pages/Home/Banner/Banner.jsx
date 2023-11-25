import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';


const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: "url('https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2023/08/Overview_Banner.webp')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}
                        className='w-full h-[400px]'>

                        <div className='bg-gradient-to-r from-[#0404c458]  w-full h-full flex flex-col gap-5 justify-center'>

                            <div className=' px-10 md:px-20 lg:px-[130px]'>
                                <h1 className='text-5xl  font-bold text-white pt-3 pb-7'>
                                    The Low-Code Platform <br />
                                    That Transforms Your Business
                                </h1>
                                <Link to='/adminLogin'>
                                    <Button className='bg-indigo-600 text-white px-4 py-4 flex items-center gap-2'>  <IoMdLogIn className="text-xl"></IoMdLogIn> Join as HR/Admin</Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        style={{ backgroundImage: "url('https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2023/08/CTA-image2.webp')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}
                        className='w-full h-[400px]'>

                        <div className='bg-gradient-to-l from-[#010182fd] to-[#0303813f]  w-full h-full flex flex-col gap-5 justify-center'>

                            <div className='text-right px-10 md:px-20 lg:px-[130px]'>
                                <h1 className='text-5xl  font-bold text-white pt-3 pb-7'>
                                    Start Innovating Today
                                </h1>
                                <Link to='/employeeLogin' className='flex justify-end'>
                                    <Button className='bg-indigo-600 text-white px-4 py-4 flex items-center gap-2'>  <IoMdLogIn className="text-xl"></IoMdLogIn> Join as Employee</Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;