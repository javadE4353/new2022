import React, { useState } from "react";
//
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//

import SliderItemHome from "../subcomponents/SliderItemHome";
import { Movies, } from "../typeing";
//interface
interface Props {
  banner: Movies;
}
//component
const SliderHome = ({ banner }: Props) => {
 
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
    {/* <Swiper
          slidesPerView={1}
          loop={false}
        >
            <SwiperSlide>
                 {banner && <SliderItemHome item={banner} />}
                 <img src={`${banner?.poster_path}`}/>
            </SwiperSlide>
        </Swiper> */}
    {banner && <SliderItemHome item={banner} />}
   </div>
  );
};

export default React.memo(SliderHome);
