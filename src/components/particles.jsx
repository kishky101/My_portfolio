import { useCallback, useContext } from "react";
import { ThemeContext } from "../context/theme.context";

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";


const ParticlesComp = () => {
    const particlesInit = useCallback(async engine => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    // eslint-disable-next-line no-unused-vars
    const particlesLoaded = useCallback(async container => {
        //await console.log(container);
    }, []);

    const {theme} = useContext(ThemeContext)


  return   <Particles 
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
      background: {
            color: {
                // value: theme === 'dark'? "#050816" : "#F0F3F6",
                value: '#F03f6'
            },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: "push",
              },
              onHover: {
                  enable: true,
                  mode: "attract",
                  parallax: {
                    enable: true,
                    force: 5,
                    smooth: 10
                  }
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: theme === 'dark'? '#fff': "#333333",
          },
          links: {
              color: theme === 'dark'? '#fff': "#333333",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          move: {
              direction: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 100,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "polygon",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  }}
/>;
};

export default ParticlesComp;
