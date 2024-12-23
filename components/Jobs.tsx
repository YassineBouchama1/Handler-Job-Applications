import React from "react";

import { BiTimeFive } from "react-icons/bi";

interface Job {
  id: number;
  image: string;
  title: string;
  time: string;
  location: string;
  desc: string;
  company: string;
}

const Data : Job[] = [
  {
    id: 1,
    image: "../../Assets/logo.png",
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Netflix",
  },
  {
    id: 2,
    image: "../../Assets/logo1.png",
    title: "UI Designer",
    time: "14Hrs",
    location: "Manchester",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Google",
  },
  {
    id: 3,
    image: "../../Assets/logo2.png",
    title: "Software Eng.",
    time: "Now",
    location: "Austria",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Instagram",
  },
  {
    id: 3,
    image: "../../Assets/logo3.png",
    title: "Frontend Eng.",
    time: "2Mnths.",
    location: "Turkey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Instagram",
  },
  {
    id: 3,
    image: "../../Assets/logo4.png",
    title: "Backend Dev.",
    time: "12Hrs",
    location: "South Korea",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Instagram",
  },
  {
    id: 1,
    image: "../../Assets/logo7.png",
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Netflix",
  },
  {
    id: 2,
    image: "../../Assets/logo4.png",
    title: "UI Designer",
    time: "14Hrs",
    location: "Manchester",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Google",
  },
  {
    id: 3,
    image: "../../Assets/logo4.png",
    title: "Software Eng.",
    time: "Now",
    location: "Austria",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Instagram",
  },
  {
    id: 3,
    image: "../../Assets/logo4.png",
    title: "Frontend Eng.",
    time: "2Mnths.",
    location: "Turkey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Instagram",
  },
  {
    id: 3,
    image: "../../Assets/logo4.png",
    title: "Backend Dev.",
    time: "12Hrs",
    location: "South Korea",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Instagram",
  },
  {
    id: 1,
    image: "../../Assets/logo4.png",
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Netflix",
  },
  {
    id: 2,
    image: "../../Assets/logo4.png",
    title: "UI Designer",
    time: "14Hrs",
    location: "Manchester",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "Google",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className=" flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg
        shadow-greyIsh-400/70 hover:shadow-lg "
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>

              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button
                className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
           hover:bg-white group-hover/item:text-textColor group-hover:text-black"
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
