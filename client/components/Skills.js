import React from 'react';
import node from '/public/assets/nodejs2.png';
import javascript from '/public/assets/javascript2.png';
import git from '/public/assets/git2.png';
import express from '/public/assets/express2.png';
import html from '/public/assets/html2.png';
import css from '/public/assets/css2.png';
import sequelize1 from '/public/assets/sequelize2.png';
import sequelize2 from '/public/assets/sequelize3.png';
import postgres from '/public/assets/postgres2.png';
import react from '/public/assets/react2.png';
import redux1 from '/public/assets/redux2.png';
import redux2 from '/public/assets/redux3.png';
import tailwind from '/public/assets/tailwind2.png';
import github from '/public/assets/github.png';

export default function Skills() {
  const technologies = [
    {
      id: 1,
      src: node,
      title: 'Node',
      style: 'shadow-green-500',
    },
    {
      id: 2,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 3,
      src: express,
      title: 'Express',
      style: 'shadow-gray-700',
    },
    {
      id: 4,
      src: github,
      title: 'Github',
      style: 'shadow-gray-700',
    },
    {
      id: 5,
      src: git,
      title: 'Git',
      style: 'shadow-red-500',
    },
    {
      id: 6,
      src: html,
      title: 'HTML',
      style: 'shadow-red-500',
    },
    {
      id: 7,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-800',
    },
    {
      id: 8,
      src: sequelize2,
      title: 'Sequelize',
      style: 'shadow-blue-600',
    },
    {
      id: 9,
      src: postgres,
      title: 'PostgreSQL',
      style: 'shadow-blue-900',
    },
    {
      id: 10,
      src: react,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 11,
      src: redux2,
      title: 'Redux',
      style: 'shadow-purple-700',
    },
    {
      id: 12,
      src: tailwind,
      title: 'TailwindCSS',
      style: 'shadow-teal-500',
    },
  ];

  return (
    <>
      <div name="skills">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-600 p-2 inline">
              Skills
            </p>
            <p className="pt-6 pb-20">Technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {technologies.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-110
                 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-36 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
