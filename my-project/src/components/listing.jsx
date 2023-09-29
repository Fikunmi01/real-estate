import React, { useState } from "react";

export const ListingComp = () => {
  const listingArray = [
    {
      imgSrc: "/assets/imgItem.jpg",
      location: "Andheri East, Mumbai",
      agency: "Lodha Miracles",
      price: "$450K-680K",
      tag1: "1BHK",
      tag2: "2BHK",
      tag3: "Rental",
    },
    {
      imgSrc: "/assets/imgItem.jpg",
      location: "Andheri East, Mumbai",
      agency: "Lodha Miracles",
      price: "$450K-680K",
      tag1: "1BHK",
      tag2: "2BHK",
      tag3: "Rental",
    },
  ];
  return (
    <>
      <div className="flex px-12 gap-10">
        {listingArray.map((item) => {
          return (
            <>
              <div className="top-32 flex-col text-deepBlack flex relative">
                  <img src={item.imgSrc} className="" alt="" />

                <div className="relative -top-96 font-sans pl-12 pt-16 text-deepBlack">
                  <h2 className="text-3xl font-bold leading-relaxed">
                    {item.agency}
                  </h2>
                  <p className="leading-relaxed font-semibold text-xl">
                    {item.location}
                  </p>
                  <p className="text-lg mb-3 font-semibold leading-relaxed">
                    {item.price}
                  </p>
                  <div className="flex gap-5 leading-loose font-bold ">
                    <p className="px-3 rounded-full border-2 border-solid border-lightGray">{item.tag1}</p>
                    <p className="px-3 rounded-full border-2 border-solid border-lightGray">{item.tag2}</p>
                    <p className="px-3 rounded-full border-2 border-solid text-white border-lightGray">{item.tag3}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
