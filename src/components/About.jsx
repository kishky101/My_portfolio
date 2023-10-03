/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, links } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme.context";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-l-card dark:shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-l-tertiary dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-t-secondary dark:text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const {theme} = useContext(ThemeContext);
  const [view, setView] = useState(false);

  const toggleView = () => setView(!view)

  const lightLinkStyle = {
    background: 'rgba(76, 74, 74, 0.56)',
    // borderRadius: '5px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(7.3px)',
    WebkitBackdropFilter: 'blur(7.3px)',
    border: '1px solid rgba(76, 74, 74, 0.51)'
  }

  const darkLinkStyle = {
    background: 'rgba(169, 169, 199, 0.23)',
    // borderRadius: '5px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5.9px)',
    WebkitBackdropFilter: 'blur(5.9px)',
    border: '1px solid rgba(169, 169, 199, 0.09)'
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div>
        <motion.p
          variants={fadeIn("", "", 0, 0.2)}
          className="mt-4 text-t-secondary dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {/* A skilled Frontend Developer with over 2 years of experience creating and implementing innovative solutions for web applications. My expertise in producing interactive user experiences, ensuring the highest level of responsiveness, and rapidly debugging code have enabled me to be a valuable assest to my previous employers. My excellent interpersonal and communication skills enables me to collaborate productively both internally, within programming teams as well as externally with clients.  */}
          With over 2 years of dedicated expertise in Frontend Development, I bring a passion for crafting seamless user experiences. Proficient in HTML, CSS, and JavaScript, I thrive on transforming ideas into visually stunning and interactive realities. Let me elevate your projects to new heights with innovation, precision, and a keen eye for detail. Together, let&apos;s create digital wonders that leave a lasting impact.
        </motion.p>
        <div
          className="relative flex items-center gap-3"
        >
          <p 
            className="flex px-5 py-3 text-white rounded-xl w-[140px] cursor-pointer" 
            style={theme === 'dark' ? darkLinkStyle : lightLinkStyle}
            onClick={toggleView}
          >My Resume</p>
          <div 
            className="flex flex-col max-w-[100px] gap-3 w-0 overflow-hidden"
            style={{width: `${view? '100%': ''}`, transition: 'all .5s'}}
          >
            <button 
              className="px-5 py-3 text-white" 
              style={theme === 'dark' ? darkLinkStyle : lightLinkStyle}
              onClick={() => {
                window.open('https://bold.pro/my/marzuq-adebayo', '_blank')
                setView(false)
              }}
            >View</button>
            <a 
              className="px-3 py-3 text-white" 
              style={theme === 'dark' ? darkLinkStyle : lightLinkStyle}
              href="../assets/Marzuq_Adebayo_Resume.pdf"
              download
              onClick={() => setView(false)}
            >Download</a>
          </div>
        </div>

        <div className="fixed bottom-[100px] right-[-10px] z-[100] flex-col flex items-center justify-center gap-5 px-3 py-5 rounded-l" style={theme === 'dark' ? darkLinkStyle : lightLinkStyle}>
          {links.map(({name, url, icon}) => (
            <a 
              key={name} 
              href={url}
              target="_blank" 
              rel="noreferrer"
              className="text-[30px]"
              aria-label={name}
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
