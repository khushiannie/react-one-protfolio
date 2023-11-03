import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Passionate about coding and web development, I am a dedicated 3rd year Information Science Engineering student at Bangalore Institute of Technology. With a strong foundation in programming languages such as C, C++, and MERN stack.
Beyond technical expertise, I am a proactive collaborator who enjoys working in dynamic teams.
        </p>

        <br />

        <p className="text-xl">
        I value effective communication and believe in leveraging collective strengths to deliver exceptional results.
Feel free to reach out if you're interested in discussing potential collaborations, exciting projects, or simply sharing ideas.
        </p>
      </div>
    </div>
  );
};

export default About;