// @flow strict

import * as React from "react";
import { BsGithub } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-pink-500 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={project.image}
              width={500}
              height={400}
              alt={project.name}
              className="rounded-lg"
            />
            <div className="flex flex-row-reverse gap-7 justify-center mt-4 w-9/12">
              <Link
                href={project.code}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
              <Link
                href={project.demo}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaPlay size={30} />
              </Link>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              {project.tools.map((tool, index) => {
                return (
                  <div
                    key={tool}
                    className="space-x-1 text-blue-500 font-mono border-l-blue-500 rounded-md"
                  >
                    {tool}
                  </div>
                );
              })}
            </div>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
