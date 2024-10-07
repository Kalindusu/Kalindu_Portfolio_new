import React from "react";
import { motion } from "framer-motion";
import next from "../assets/projects/c1.png";
import { Github, Link, SquareArrowOutUpRight } from "lucide-react";
import { project } from "../data/index";


const Projects = () => {
    const images = [
        next,
        next,
        next,
        next,
        next,
        next,
        next,
        next,
        next,
        next,
        next,
      ];

    return (
        <div className="border-b border-neutral-500 pb-1">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl font-bold"
            >
                Projects
            </motion.h2>
            <div className="container   ">
        <div className="  text-white md:py-10 py-5  font-nav ">
          <div className="py-2">
            <h2 className="text-2xl text-center text-white">
              Past Project Experience
            </h2>
            <p className="text-sm py-4 text-center ">
              Explore how I consistently delivered maximum results in my
              previous projects.
            </p>
            <div className="grid gap-4 my-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {project.map((el, idx) => (
                <div
                  className="p-4 border-2 rounded-md border-customBlue flex flex-col gap-4 overflow-hidden"
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="flex justify-between">
                    <p className="text-customBlue">{el.name}</p>
                    <div className="flex gap-2">
                      <a
                        href={el.repo}
                        target="_blank"
                        className="block hover:text-customBlue "
                      >
                        <Github />
                      </a>
                      <a
                        href={el.demo}
                        target="_blank"
                        className="block hover:text-customBlue "
                      >
                        <SquareArrowOutUpRight />
                      </a>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 flex justify-center items-center bg-[#363737a3] translate-x-[120%] group-hover:translate-x-0 transition-all duration-300 ">
                      {/* <a
                        href={el.demo}
                        target="_blank"
                        className="flex gap-2 text-xl"
                      >
                        LiveDemo <Link className="text-customBlue" />
                      </a> */}
                    </div>
                    <img
                      src={images[idx]}
                      alt={el.name}
                      loading="lazy"
                      className="block w-full rounded-md"
                    />
                  </div>
                  <div className="h-32 overflow-auto">
                    <p className="text-sm  leading-6">
                      {el.details}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm  ">{el.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Projects;
