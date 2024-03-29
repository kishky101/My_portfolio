/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.25)}
      onClick={() => window.open(live_link, "_blank")}
      className="cursor-pointer"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-l-tertiary dark:bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-t-secondary dark:text-white font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-t-secondary dark:text-secondary text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-t-secondary dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Within the following projects, I showcase my prowess and expertise
          through tangible, real-world demonstrations of my work. Each project
          is succinctly outlined, accompanied by direct links to code
          repositories and live demos. This collection exemplifies my capacity
          to tackle intricate challenges, navigate diverse technologies, and
          execute projects with adept management.
        </motion.p>
      </div>

      <Carousel
        className="mt-20 flex flex-wrap gap-7 justify-center items-center"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="md:-ml-20 xl:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={`project-${index}`}
              className="flex justify-center items-start md:basis-1/2 lg:basis-1/3 md:pl-4"
            >
              <ProjectCard index={index} {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </>
  );
};

export default SectionWrapper(Works, "");
