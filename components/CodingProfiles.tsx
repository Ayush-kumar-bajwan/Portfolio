import React from 'react';
import { codingProfiles } from '@/data';

const CodingProfiles = () => {
  return (
    <div className="relative py-20">
      <h1 className="heading text-center text-3xl md:text-4xl font-bold">
        My <span className="text-purple">Coding Profiles</span>
      </h1>
      <div className="relative flex flex-col items-center mt-10">
        {/* Vertical Road */}
        <div className="w-1 bg-gray-300 h-full absolute left-[50%] top-0 transform -translate-x-1/2" style={{ zIndex: 1 }}></div>

        {/* Profile Milestones */}
        {codingProfiles.map(({ id, platform, description, logo, link }, index) => (
          <div
            key={id}
            className={`flex items-center w-full mb-10 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            style={{ zIndex: 2 }} // Ensure profile card is above the vertical line
          >
            {/* Profile Card */}
            <div className="flex items-center p-6 bg-[#13162d] shadow-lg rounded-lg w-[400px] relative">
              <img src={logo} alt={`${platform}-logo`} className="w-16 h-16 mr-4" />
              <div>
                <h2 className="font-bold text-xl">{platform}</h2>
                <p className="text-base mt-1 text-gray-300">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-purple hover:underline mt-2 inline-block">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
