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
                    {/* https://assets-global.website-files.com/60edc0a8835d5b38bf11f03f/61cf05798c313369690d6ae9_Asset-Management-System.jpeg */}
                    <div
                        style={{ backgroundImage: "url('https://i.ibb.co/SN32mdh/Screenshot-71.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}
                        className='w-full h-[500px] md:h-[400px]'>

                        <div className=' bg-gradient-to-r from-[#010182ad] to-[#0b0b800f]  w-full h-full flex flex-col gap-5 justify-center'>

                            <div className=' px-10 md:px-20 lg:px-[130px]'>
                                <h1 className='text-5xl  font-bold text-white pt-3 pb-7'>
                                    The Low-Code Platform <br />
                                    That Transforms Your Business
                                </h1>
                                <Link to='/adminLogin'>
                                    <Button className='bg-indigo-600 text-white px-4 py-4 flex items-center gap-2 mb-4'>  <IoMdLogIn className="text-xl"></IoMdLogIn> Join as HR/Admin</Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        style={{ backgroundImage: "url('https://i.ibb.co/pXn5cjG/screencapture-cdn-bkknn-nitrocdn-f-Gc-PNFYNo-LNWGSll-Wzg-Dxt-BAbr-FDa-IYE-assets-images-optimized-re.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}
                        className='w-full h-[500px] md:h-[400px]'>

                        <div className='bg-gradient-to-l from-[#010182cd] to-[#0808683f]  w-full h-full flex flex-col gap-5 justify-center'>

                            <div className='text-right px-10 md:px-20 lg:px-[130px]'>
                                <h1 className='text-5xl  font-bold text-white pt-3 pb-7'>
                                    Start Innovating Today
                                </h1>
                                <Link to='/employeeLogin' className='flex justify-end'>
                                    <Button className='bg-indigo-600 text-white px-4 py-4 flex items-center gap-2 mb-4'>  <IoMdLogIn className="text-xl"></IoMdLogIn> Join as Employee</Button>
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