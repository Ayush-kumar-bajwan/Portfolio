import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading text-center text-3xl md:text-4xl font-bold">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="w-full mt-12 gap-10 flex flex-col justify-center items-center">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4 lg:gap-8">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-28 w-20"
              />
              <div className="lg:ms-5 text-left">
                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="text-sm md:text-base text-gray-400 font-semibold mt-2">
                  {card.company} | {card.type}
                </p>
                <p className="text-sm md:text-base text-gray-400 mt-1">
                  {card.duration}
                </p>
                <p className="text-sm md:text-base text-white-100 mt-4 font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;