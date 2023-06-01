import React from 'react';
import CityDiary from '../../public/assets/city-diary-cover.png';
import defaultCover from '../../public/assets/no-project-cover.png';

export default function Projects() {
  return (
    <div name="projects">
      <div>
        <div>
          <p>Projects</p>
          <p>Check out some of my work right here</p>
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
