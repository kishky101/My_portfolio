/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'


const Skill = ({icon, name}) => {
  return (
    
    <div className='tooltip'>
        <motion.div
            animate={{
                y: [0, Math.random() * 24, 0],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
            }}
            className='w-20 violet-gradient skill p-3 '>
            <img 
                src={icon}
                alt={'imageUrl'}
                className='max-h-20 '
            />
            
        </motion.div>
        <span className='tooltiptext black-gradient text-secondary'>{name}</span>
    </div>
  )
}

export default Skill

{/* <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
<motion.dev
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
</div> */}