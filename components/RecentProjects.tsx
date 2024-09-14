import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap gap-x-24 gap-y-8 p-4 items-center justify-center mt-10">
        {projects.map(({ id, title, des, img, iconLists, liveLink }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            {/* Card Container linking to live link */}
            <PinContainer title={title} href={liveLink}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] h-[30vh] sm:h-[40vh] mb-10 overflow-hidden">
                {/* Background Image */}
                <div>
                  <img
                    src="/bg.png"
                    alt="bg-img"
                    className="relative w-full h-full object-cover lg:rounded-3xl bg-[#13162d]"
                  />
                </div>
                {/* Project Image */}
                <div className="absolute z-10 bottom-8 sm:bottom-10 transform rotate-[6deg] max-w-full max-h-full p-4 translate-x-6 translate-y-6">
                  <img
                    src={img}
                    alt={title}
                    className="max-w-[90%] max-h-[95%] object-contain rounded-xl shadow-lg"
                  />
                </div>
              </div>
              {/* Project Title and Description */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl text-sm lg:font-normal font-light line-clamp-2">
                {des}
              </p>
              {/* Icons and Live Status Button */}
              <div className="flex items-center justify-between mt-7 mb-3">
                {/* Technology Icons */}
                <div className="flex flex-wrap items-center max-w-[80%]">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] bg-black rounded-full lg:w-10 lg:h-10 w-7 h-7 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index}px)` }}
                    >
                      <img className="p-1" src={icon} alt={icon} />
                    </div>
                  ))}
                </div>
                {/* Check Live Status Button */}
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center lg:text-xl md:text-xs text-sm text-purple hover:underline"
                >
                  Check Live Status <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
