import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import resume from '../../public/mmResume.pdf';

export default function Home() {
  return (
    <>
      <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold">
              Hi, my name is Malcolm and I am a Full Stack Software Engineer
            </h2>
            <p className="py-4 max-w-md">
              I have a year of experience building and designing software. I
              enjoy working on web applications using technologies like React
              and Tailwind.
            </p>
            <div>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-600 to-orange-400 cursor-pointer">
                  View My Resume
                  {/* <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span> */}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
