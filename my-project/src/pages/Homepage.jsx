import React, { useState } from "react";
import MyToggle from "../components/toggle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ListingComp } from "../components/listing";

export const Homepage = () => {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState("Affordable");

  const handleCount = () => {
    setCount(count + 1);
  };

  const reduceCount = () => {
    if (count === 0) {
    } else {
      setCount(count - 1);
    }
  };

  const handleCheap = () => {
    setRange("Affordable");
  };

  const handleAffordability = () => {
    setRange("Expensive");
  };

  const brandArray = [
    {
      businessLogo: "/assets/lodha.png",
      businessName: "Lodha Group",
      businessExperience: "35+ years of experience",
      projectCompleted: "270+ Project Done",
      businessCta: "",
    },
    {
      businessLogo: "/assets/prestige.png",
      businessName: "Prestige Group",
      businessExperience: "40+ years of experience",
      projectCompleted: "140+ Project Done",
      businessCta: "",
    },
    {
      businessLogo: "/assets/brigrade.png",
      businessName: "Brigade Group",
      businessExperience: "35+ years of experience",
      projectCompleted: "180+ Project Done",
      businessCta: "",
    },
    {
      businessLogo: "/assets/sobh.png",
      businessName: "Sobha Limited",
      businessExperience: "35+ years of experience",
      projectCompleted: "150+ Project Done",
      businessCta: "",
    },
  ];

  const carouselArray = [
    {
      id: 1,
      imgSrc: "/assets/Rectangle123.png",
      location: "Bandra",
      description: "sea-facing, spacious",
      className: "inactive",
    },
    {
      id: 2,
      imgSrc: "/assets/Rectangle123.png",
      location: "Bandra",
      description: "sea-facing, spacious",
      className: "active",
    },
    {
      id: 3,
      imgSrc: "/assets/Rectangle123.png",
      location: "Bandra",
      description: "sea-facing, spacious",
      className: "inactive",
    },
    {
      id: 4,
      imgSrc: "/assets/Rectangle123.png",
      location: "Bandra",
      description: "sea-facing, spacious",
      className: "inactive",
    },
    {
      id: 5,
      imgSrc: "/assets/Rectangle123.png",
      location: "Bandra",
      description: "sea-facing, spacious",
      className: "inactive",
    },
    {
      id: 6,
      imgSrc: "/assets/Rectangle123.png",
      location: "Bandra",
      description: "sea-facing, spacious",
      className: "inactive",
    },
  ];

  const socialsLink = [
    {
      imgSrc: "/assets/Vector1.svg",
      link: "",
    },
    {
      imgSrc: "/assets/Vector2.svg",
      link: "",
    },
    {
      imgSrc: "/assets/Group66.svg",
      link: "",
    },
    {
      imgSrc: "/assets/Vector3.svg",
      link: "",
    },
    {
      imgSrc: "/assets/Vector4.svg",
      link: "",
    },
  ];

  const dropdownArray = [
    {
      title: "History",
      description: "",
    },
    {
      title: "Quality",
      description: "",
    },
    {
      title: "Failure",
      description: "",
    },
  ];

  const aboutArray = [
    {
      imgSrc: "/assets/Group4.png",
      title: "3D Planning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    },
    {
      imgSrc: "/assets/Group5.png",
      title: "Web Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    },
    {
      imgSrc: "/assets/Group6.png",
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    },
  ];

  return (
    <>
      <div>
        <div className="flex">
          <div className="px-12 flex flex-col gap-y-16  w-2/5">
            <img src="/assets/logo.png" className="w-20 pt-10 top-16" alt="" />
            <h1 className="font-serif text-4xl text-darkGray font-normal leading-tight">
              We Help You Building The Dreams & Bring More Than You Expect{" "}
            </h1>

            <div className="flex items-center rounded-2xl bg-offWhite boxShadow py-3 gap-3 w-3/4">
              <button className="pl-5 text-lg font-bold text-lightBlue">
                Search Properties
              </button>
              <img src="/assets/searchIcon.png" className="w-7" alt="" />
            </div>
          </div>

          <div className="">
            <img src="/assets/heroImg.png" className="h-5/6 w-full" alt="" />

            <div className="mt-5 mb-10 px-16">
              <ul className="flex text-lg font-sans gap-20 items-center">
                <li className="boxShadow px-5 py-2 rounded-xl text-lightBlue">
                  Home
                </li>
                <li className="text-darkGray">Projects</li>
                <li className="text-darkGray">Localities</li>
                <li className="text-darkGray">Developers</li>
                <li className="boxShadow bg-offWhite h-12 w-12 flex items-center rounded-full justify-center">
                  <img src="/assets/hamburger.png" className="w-5 " alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-10 flex gap-16 mb-28">
          {brandArray.map((item) => {
            return (
              <>
                <div className="bg-white boxShadow rounded-2xl px-6 py-8 w-72">
                  <div className="h-48 flex items-center">
                    <img src={item.businessLogo} className="pb-8" alt="" />
                  </div>
                  <h3 className="text-black  leading-loose font-bold font-sans">
                    {item.businessName}
                  </h3>
                  <p className="font-normal text-black leading-loose">
                    {item.businessExperience}
                  </p>
                  <p className="text-lightBlue leading-loose mb-4 font-bold">
                    {item.projectCompleted}
                  </p>
                  <div className="text-lightBlue font-bold flex items-center text-lg justify-around pl-3 boxShadow bg-offWhite rounded-full">
                    Check Profile{" "}
                    <img src="/assets/arrow.png" alt="" className="w-12" />
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="mx-12 boxShadow flex items-center px-10 py-10 gap-10 rounded-2xl">
          <div className="flex gap-y-10 flex-col">
            <div className="flex gap-12">
              <input
                className="boxShadowSearch px-6  placeholder-shown placeholder-shown:text-lightGray text-sm py-3 w-2/3 rounded-full"
                placeholder="Search Property Name, Locality, Developer"
                type="search"
                name=""
                id=""
              />

              <div className="flex items-center gap-10">
                <h3 className="text-deepBlack font-sans font-bold">Bedrooms</h3>
                <span className="flex items-center gap-10 boxShadowSearch rounded-full">
                  <img
                    src="/assets/minusIcon.png"
                    onClick={reduceCount}
                    className="cursor-pointer boxShadowBtn px-3 py-6 rounded-full"
                    alt=""
                  />
                  <p className="text-lg text-lightGray font-sans font-medium">
                    {count}
                  </p>
                  <img
                    src="/assets/plusIcon.png"
                    onClick={handleCount}
                    className="cursor-pointer boxShadowBtn px-3 py-3 rounded-full"
                    alt=""
                  />
                </span>
              </div>
            </div>

            <div className="text-deepBlack font-bold flex items-center gap-20">
              <div className="flex items-center gap-10">
                <h3 className="font-sans font-bold">Price Segment</h3>
                <span className="flex items-center gap-10 boxShadowSearch rounded-full">
                  <img
                    src="/assets/ArrowLeft.png"
                    className="cursor-pointer boxShadowBtn px-3 py-3 rounded-full"
                    onClick={handleCheap}
                    alt="left arrow"
                  />
                  <p className="text-lightBlue font-medium text-lg font-sans">
                    {range}
                  </p>
                  <img
                    src="/assets/ArrowRight.png"
                    onClick={handleAffordability}
                    className="cursor-pointer boxShadowBtn px-3 py-3 rounded-full"
                    alt="right arrow"
                  />
                </span>
              </div>

              <div className="flex items-center gap-6 ">
                Ready to Move
                <MyToggle />
              </div>

              <div className="boxShadow bg-offWhite px-10 rounded-full py-3 text-[#CDCDCD] font-bold font-sans">
                Advance Filters
              </div>
            </div>
          </div>

          <div className="w-24 cursor-pointer">
            <img src="/assets/searchIcon.png" alt="" />
          </div>
        </div>

        <ListingComp />

        <div className="text-black font-sans px-12 mb-10">
          <h1 className="text-3xl leading-loose">Property Selection Process</h1>{" "}
          <p className="w-2/6 te text-xs text-black font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
            tempor incididunt ut labore et.
          </p>
          <div className="flex px-12 justify-center">
            <img src="/assets/screenshot.png" className="w-[100vh]" alt="" />
          </div>
        </div>

        <div className="mb-20">
          <div className="text-black font-sans px-12 pb-10">
            <h1 className="text-3xl leading-loose">Localities</h1>{" "}
            <p className="w-2/6 te text-xs text-black font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            className="pb-16 px-12"
          >
            {carouselArray.map((item) => {
              // className={`${item.id % 2 === 1 ? "w-1/4" : "w-1/3"} relative`}
              return (
                <SwiperSlide>
                  <div>
                    <div className="absolute top-48 text-[#fff] font-sans pl-10">
                      <h1 className="text-2xl font-bold leading-relaxed">
                        {item.location}
                      </h1>
                      <p className="font-normal">{item.description}</p>
                    </div>
                    <img src={item.imgSrc} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="flex h-[90vh] relative ">
          <img
            src="/assets/overlayImg.jpg"
            className="absolute h-[90vh] w-full"
            alt=""
            srcset=""
          />
          <div className="bg-lightBrown w-1/2 px-20 py-10 z-10">
            <h1 className="text-4xl mb-8 font-light">About Us</h1>
            <p className="text-2xl font-light mb-4">Key points about company</p>
            <p className="mb-10 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              iste quasi dolores sit quia repudiandae delectus vero blanditiis
              fugit
            </p>

            <div className="flex-col flex mb-20">
              {dropdownArray.map((item) => {
                return (
                  <>
                    <div className="flex items-center justify-between py-5 border-b-2 border-solid">
                      <span className="flex items-center gap-6">
                        <img src="/assets/Group69.png" alt="" />
                        <p>{item.title}</p>
                      </span>

                      <img src="/assets/Arrow17.svg" alt="" />
                    </div>
                  </>
                );
              })}
            </div>

            <div className="flex gap-5 flex-row items-center">
              {socialsLink.map((item) => {
                return (
                  <>
                    <div className="">
                      <img
                        src={item.imgSrc}
                        className="w-6 h-6 flex items-center"
                        alt=""
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white font-sans px-12 py-16">
          <h1 className="text-black font-light text-4xl leading-loose">
            What We Do
          </h1>

          <div className="grid grid-cols-3">
            {aboutArray.map((item) => {
              return (
                <div className="inline-block">
                  <div className="relative mt-6 h-48 ">
                    <div className="flex items-center">
                      <img
                        src={item.imgSrc}
                        alt=""
                        className="left-32 relative w-14 h-14 z-20 bg-[url(/assets/Rectangle63.png)]"
                      />

                      <span className="flex items-center justify-center">
                        <img
                          src="/assets/Rectangle60.png"
                          alt=""
                          className="w-44 absolute"
                        />
                        <img
                          src="/assets/Rectangle63.png"
                          className="w-44 ml-6 h-44 z-10 mt-6 rounded-full"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>

                  <div className="text-center mt-4 w-2/3 relative">
                    <h3 className="text-black font-bold text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-black text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-12 pt-16 text-black flex relative h-[113vh]">
          <div className="z-10 w-1/3">
            <h1 className="font-light text-3xl leading-relaxed">
              Check Our Recent Project
            </h1>
            <p className="font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velita.
            </p>
          </div>
          <div className="absolute">
            <img src="/assets/project1.png" alt="" />
          </div>
        </div>

        <div className="flex relative">
          <div className="">
            <img src="/assets/Rectangle74.png" className="" alt="" />
          </div>

          <div className="bg-black relative">
            <div className="px-32 py-16">
              <img src="/assets/Group7.png" className="mb-6" alt="" />

              <p className="text-[#E0E0E0] font-light mb-6 text-md text-base">
                Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>

              <span className="flex flex-col">
                <input
                  className="outline-none px-6 py-4 mb-6 rounded-xl boxShadowBlack"
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  className="px-6 py-4 rounded-xl mb-10 outline-none boxShadowBlack"
                  type="email"
                  name="email"
                  placeholder="yourmailadressplease@gmail.com"
                  id=""
                />

                <button className="flex items-center boxShadowSubmit rounded-xl w-2/3 px-6 py-5 text-lightBlue gap-4">
                  Get In Touch With Us
                  <img src="/assets/Arrow13.svg" alt="" className="w-6"/>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
