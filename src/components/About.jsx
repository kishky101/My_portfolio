/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, links } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div>
        <motion.p
          variants={fadeIn("", "", 0, 0.2)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {/* A skilled Frontend Developer with over 2 years of experience creating and implementing innovative solutions for web applications. My expertise in producing interactive user experiences, ensuring the highest level of responsiveness, and rapidly debugging code have enabled me to be a valuable assest to my previous employers. My excellent interpersonal and communication skills enables me to collaborate productively both internally, within programming teams as well as externally with clients.  */}
          With over 2 years of dedicated expertise in Frontend Development, I bring a passion for crafting seamless user experiences. Proficient in HTML, CSS, and JavaScript, I thrive on transforming ideas into visually stunning and interactive realities. Let me elevate your projects to new heights with innovation, precision, and a keen eye for detail. Together, let&apos;s create digital wonders that leave a lasting impact.
        </motion.p>

        <div className="fixed bottom-10 right-10 z-[100] flex items-center justify-center gap-5 links px-5 py-5 max-w-[250px]">
          {links.map(({name, url, icon}) => (
            <a 
              key={name} 
              href={url}
              target="_blank" 
              rel="noreferrer"
              className="text-[30px]"
            >
              {icon()}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
