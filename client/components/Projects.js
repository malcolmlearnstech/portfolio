import React from 'react';
import CityDiary from '../../public/assets/city-diary-cover.png';
import insertImageHere from '../../public/assets/no-project-cover.png';
import defaultCover from '../../public/assets/default-project-cover.png';

export default function Projects() {
  const portfolio = [
    {
      id: 1,
      projectImage: CityDiary,
      demoLink: 'https://youtu.be/GZ4RHsHUgW8',
      githubLink: 'https://github.com/HCJM/City-DiaryV2',
    },
    {
      id: 2,
      projectImage: defaultCover,
      demoLink: '',
      githubLink: 'https://github.com/malcolmlearnstech/portfolio',
    },
    {
      id: 3,
      projectImage: defaultCover,
      demoLink: '',
      githubLink: 'https://github.com/malcolmlearnstech/second-boilerplate',
    },
  ];

  const openDemoLink = (demoLink) => {
    window.open(demoLink, '_blank');
  };

  const openGithubLink = (githubLink) => {
    window.open(githubLink, '_blank');
  };

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
          {portfolio.map(({ id, projectImage, demoLink, githubLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={projectImage}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => openDemoLink(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                >
                  Demo
                </button>
                <button
                  onClick={() => openGithubLink(githubLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                >
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
