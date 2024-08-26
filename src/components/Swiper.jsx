import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide_One from '../assets/images/slide_1.jpg';
import Slide_Two from '../assets/images/slide_2.jpg';
import Slide_Three from '../assets/images/slide_3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Image } from 'antd';
import ReactPlayer from 'react-player';

export default function SwiperComponent() {
  const [isVideo, setIsVideo] = useState(false);

  return (
    <div className="flex flex-col w-full relative swiper-container">
      {isVideo ? (
        <ReactPlayer
          url="https://idc0-cdn5.khamenei.ir/ndata/news/57278/14030511_65200_l.mp4"
          controls={true}
          playing={true}
          width={'100%'}
          height={'40rem'}
          config={{
            file: {
              attributes: {
                autoPlay: true,
                muted: true, // Auto-playing videos should be muted for a better user experience
              },
            },
          }}
        />
      ) : (
        <React.Fragment>
          <Swiper
            dir="rtl"
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper bg-red-600 p-0 m-0"
            centeredSlides={true}
            autoplay={{
              delay: 5000,
            }}
          >
            <SwiperSlide className="flex justify-center items-center p-0 m-0 w-full h-full bg-black">
              <img src={Slide_Three} className="object-fill" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide_Two} className="object-fill" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide_One} className="object-fill" />
            </SwiperSlide>
            {/* <SwiperSlide>Slide 3</SwiperSlide> */}
          </Swiper>
          <div className="bg-primary-500 absolute bottom-0 w-full flex z-1001 opacity-80 py-1 ">
            <div className=" text-white mr-12">تحول گرا، نوآور و انقلابی</div>
          </div>
        </React.Fragment>
      )}
      <div className="bg-primary-500 absolute top-0 left-0 flex z-1001 opacity-100 py-1 ">
        <div
          className=" text-white  px-4 cursor-pointer"
          onClick={() => setIsVideo(!isVideo)}
        >
          {' '}
          {isVideo ? 'تبدیل به اسلاید' : 'تبدیل به ویدیو'}{' '}
        </div>
      </div>
    </div>
  );
}
