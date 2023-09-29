import React, { useState } from "react";
import MyToggle from "../components/toggle";
import { ListingComp } from "../components/listing";
import { Carousel } from "../components/swiper";

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
      </div>

      <ListingComp />

      <div className=" text-black font-sans px-12">
        <h1 className="text-3xl leading-loose">Property Selection Process</h1>{" "}
        <p className="w-2/6 te text-xs text-black font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fh
          voluptas enim dolorum! Quia explicabo
        </p>

        <div className="flex px-12 justify-center">
          <img src="/assets/screenshot.png" className="w-[100vh]" alt="" />
        </div>
      </div>

      <div>
        <Carousel/>
      </div>
    </>
  );
};
