import React from 'react';

export default function AboutMe() {
  return (
    <div name="about" className="w-full h-full mx-auto mb-12">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a fullstack engineer, born and raised in New York. With 5+ years
          of experience in operations and administrative support, I've developed
          a strong foundation in organizational efficiency and probelm solving.
          However, I've always found my interested lying toward technology.
          Recognizing that passion, I decided to take a leap of faith and pursue
          a career in the tech industry. This lead to me enrolling in Future
          Code at Fullstack Academy. During my time in Future Code, I honed I
          honed my skills in web development and gained hands-on experience with
          both front-end and back-end technologies. When I'm not in the depths
          of VS Code however, I typically enjoy spending my time biking along
          the Hudson, reading up on the latest skincare trends, and taking care
          of my pet snake, Penny.
        </p>

        <br />

        {/* <p className="text-xl">
          As is often the case with ultra, that period of pain and deep
          exhaustion was chased by an extended flow state. Toward the end of his
          13th lap, he hit top gear. Rocking to playlists he had curated for the
          occasion, he sang aloud as he ran. His 91st mile was his fastest:
          6:43. His 19th and final loop was his victory lap. “I told the guys,
          were going to finish the way we started: strong. And I just went for
          it.” He ran, all out, often with his eyes closed. It was up to his
          pacers to make sure he stayed on course, and they did. When he reached
          Engineers Gate for the final time just before midnight on Friday,
          after running a total of 19 loops and 116 miles, he fell to the
          ground, elated yet spent.
        </p> */}
      </div>
    </div>
  );
}
