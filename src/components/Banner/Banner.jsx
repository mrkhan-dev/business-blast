import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {useEffect} from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="w-full bg-no-repeat bg-cover  lg:flex lg:px-64 bg-[url('https://i.ibb.co/hm1MMBv/office-buildings.jpg')]">
        <div className="w-1/2">
          <h1
            data-aos="fade-down"
            className="text-4xl font-medium text-center lg:mt-48"
          >
            Explore BusinessBlast Path to Prosperity
          </h1>
        </div>
        <Swiper
          className=" w-1/2"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{clickable: true}}
          scrollbar={{draggable: true}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="lg:mt-48">
            <img
              className="lg:h-[500px] lg:w-96 rounded-lg object-cover"
              src="https://i.ibb.co/VTgVB40/irisdicent-holographic-diorama-cyber-diorama-950002-248838.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="lg:mt-48">
            <img
              className="lg:h-[500px] lg:w-80 rounded-lg"
              src="https://i.ibb.co/HDY7704/night-club-with-dancing-people-dance-floor-stage-musical-event-mixer-dj-118086-4416.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="lg:mt-48">
            <img
              className="lg:h-[500px] lg:w-80 rounded-lg object-cover"
              src="https://i.ibb.co/n89TK8W/cheerful-friends-having-fun-while-talking-waiter-cafe.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="lg:mt-48">
            <img
              className="lg:h-[500px] lg:w-80 rounded-lg bg-cover"
              src="https://i.ibb.co/hm1MMBv/office-buildings.jpg"
              alt=""
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <h1 className="text-center mt-8 text-3xl font-medium">Properties</h1>
    </div>
  );
};

export default Banner;
