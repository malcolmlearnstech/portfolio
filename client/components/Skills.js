import React from 'react';
import nodejs from '../assets/nodejs.png';
import javascript from '../assets/javascript.svg.png';
import git from '../assets/git.svg.png';
import express from '../assets/expressJS.png';
import html from '../assets/expressJS.png';
import css from '../assets/css3.svg.png';
import sequelize1 from '../assets/sequelize1.png';
import sequelize2 from '../assets/sequelize2.png';
import postgres from '../assets/postgreSQL.svg.png';
import react from '../assets/React.svg.png';
import redux from '../assets/redux2.jpg';
import tailwind from '../assets/TailwindCSS.svg.png';

export default function Skills() {
  return (
    <>
      <div className="text-center italic text-lg pt-4">
        <p>Below will display the Skills section:</p>
      </div>
      <div
        align="center"
        class="[word-spacing:-20px]"
        className="text-xl italic p-8 tracking-wide leading-relaxed"
      >
        <div>Node.js&nbsp;&nbsp;Javascript&nbsp;&nbsp;Git</div>
        <div>Express&nbsp;&nbsp;HTML5&nbsp;&nbsp;CSS</div>
        <div>Sequelize&nbsp;&nbsp;PostgresSQL&nbsp;&nbsp;React</div>
        <div>Redux&nbsp;&nbsp;TailwindCSS</div>
      </div>
    </>
  );
}
