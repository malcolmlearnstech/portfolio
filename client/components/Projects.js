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

        <div>
          <div>
            <img src={CityDiary} alt="" />
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
