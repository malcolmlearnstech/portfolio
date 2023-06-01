import React from 'react';
import CityDiary from '../../public/assets/city-diary-cover.png';
import defaultCover from '../../public/assets/no-project-cover.png';

export default function Projects() {
  const portfolio = [
    { id: 1, projectImage: CityDiary },
    { id: 2, projectImage: defaultCover },
    { id: 3, projectImage: defaultCover },
  ];

  return (
    <div name="projects" className="w-full text-black md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, projectImage }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={projectImage}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
