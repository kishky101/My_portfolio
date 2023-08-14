import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { marzuq } from "../assets";
import ParticlesComp from "./particles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
       
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient " />
          </div>
          <div className="flex gap-20 flex-col md:flex-row justify-center items-center">
            <div className="">
              <h1 className={`${styles.heroHeadText} text-t-secondary dark:text-white`}>
                Hi, I&apos;m <span className="text-[#915eff]">Marzuq</span>
              </h1>
                <TypeAnimation
                  sequence={[
                    'Crafting seamless code for captivating experiences.',
                    2000, 
                    'Empowering web innovation through elegant frontend development.',
                    2000,
                  ]}
                  wrapper="p"
                  speed={50}
                  style={{  display: 'inline-block' }}
                  repeat={Infinity}
                  className={`${styles.heroSubText} mt-2 text-white-100 text-balance`}
                />
            </div>
           

            <div className="self-center marzuq overflow-hidden max-w-full ">
              <img 
                src={marzuq}
                alt="marzuq"
                className="max-w-[500px] w-full h-full max-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        
    
      {/* <ComputersCanvas /> */}
      <ParticlesComp />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-[100]">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
