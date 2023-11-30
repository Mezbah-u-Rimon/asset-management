import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Logo = () => {
    return (
        <div className='h-[200px] bg-gray-300 flex items-center'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='h-[70px]' src='https://www.vectorlogo.zone/logos/gartner/gartner-ar21.svg' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://vectorlogoseek.com/wp-content/uploads/2019/11/getapp-vector-logo.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://cdn2.f-cdn.com/contestentries/993113/22134461/58e80e93d1558_thumb900.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://i.ibb.co/84txBzC/Screenshot-70-removebg-preview.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://www.tmgm.co.nz/img/main-logo-white.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://i.ibb.co/zQWppCH/Screenshot-69-removebg-preview.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://i.ibb.co/sPKHgtp/Screenshot-68-removebg-preview.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://i.ibb.co/Rg9930M/Screenshot-67-removebg-preview.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://i.ibb.co/Ycffgkg/Screenshot-66-removebg-preview.png" alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Logo;