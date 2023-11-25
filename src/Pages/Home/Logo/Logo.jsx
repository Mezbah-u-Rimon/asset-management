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
                    <img className='h-[70px]' src="https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2021/01/gartner.png.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2022/02/g2-best-software-2022-badge-it-infrastructure.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://www.tmgm.co.nz/img/main-logo-white.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2022/01/getapp-2021.png.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2022/02/users-love-us.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2022/01/aws-advanced-technology-partner.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[70px]' src="https://cdn-bkknn.nitrocdn.com/fGcPNFYNoLNWGSllWzgDxtBAbrFDaIYE/assets/images/optimized/rev-3b327ff/www.caspio.com/wp-content/uploads/2022/02/g2-best-software-2022-badge-development.svg" alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Logo;