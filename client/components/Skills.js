import React from 'react';
import node from '../../public/assets/nodejs2.png';
// import javascript from '../../public/assets/javascript2.png';
// import git from '../../public/assets/git2.png';

export default function Skills() {
  return (
    <>
      <div>
        <div>
          <div>
            <p>Skills</p>
            <p>Technologies I've worked with</p>
          </div>

          <div>
            <div>
              <img src={git} alt="" />
              <p>Node</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
