import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';

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
              <button>
                Skills
                <span>
                  <ArrowSmallRightIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
