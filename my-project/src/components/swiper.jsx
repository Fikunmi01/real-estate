import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = () => {
  const carouselArray = [
    {
      id: 0,
      imgSrc: "/assets/Rectangle123.png",
      location: "Bandra",
      description: "sea-facing, spacious",
      className: "inactive",
    },
    {
      id: 1,
      imgSrc: "/assets/Rectangle123.png",
      location: "Bandra",
      description: "sea-facing, spacious",
      className: "active",
    },
    {
      id: 2,
      imgSrc: "/assets/Rectangle123.png",
      location: "Bandra",
      description: "sea-facing, spacious",
      className: "inactive",
    },
    // {
    //   id: 3,
    //   imgSrc: "/assets/Rectangle123.png",
    //   location: "Bandra",
    //   description: "sea-facing, spacious",
    //   className: "active",
    // },
  ];

  return (
    <div className="flex items-center justify-around pb-16 overflow-x-scroll">
      <span className="w-1/4">
        <img src="/assets/Rectangle123.png" alt="" />
      </span>
      <span className="w-1/3">
        <img src="/assets/Rectangle123.png" className="" alt="" />
      </span>
      <span className="w-1/4">
        <img src="/assets/Rectangle123.png" alt="" />
      </span>
    </div>
  );
};

{
  /* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="pb-16"
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {carouselArray.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className={`${item.className === "active" ? "w-1/3 bg-red-900" : "bg-red-300 w-1/4"}`}
            >
              <div
                className={`${item.className === "active" ? "w-1/3 " : "w-1/4 bg-red-300"}`}
              >
                <img className="" src={item.imgSrc} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */
}
