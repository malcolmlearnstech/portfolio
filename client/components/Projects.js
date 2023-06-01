import React from 'react';
import CityDiary from '../../public/assets/city-diary-cover.png';
import defaultCover from '../../public/assets/no-project-cover.png';

export default function Projects() {
  return (
    <div name="projects" className="w-full text-black md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={CityDiary}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
