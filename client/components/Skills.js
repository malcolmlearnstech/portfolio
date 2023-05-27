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

export default function Skills() {
  return (
    <>
      <div name="skills">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6">Technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
              <img src={node} alt="" className="w-36 mx-auto" />
              <p className="mt-4">Node</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
