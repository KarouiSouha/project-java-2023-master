import { motion } from 'framer-motion';
import { fadeIn, staggerContainer  } from '../../utils/motion';
import styles from '../../style';
import { TitleText, TypingText } from '../../components/landingPage/TypingText';
import { mapimg,people1,people2,people3 } from "../../assets/index";

const World = () => (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
  
        <TypingText title="| World wide campany" textStyles="text-center" />
        <TitleText
          title={(
            <>A global clothing retailer with a vast shipping network.
            </>
          )}
          textStyles="text-center"
        />
  
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img src={mapimg} alt="map" className="w-full h-full object-cover" />
  
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src={people1} alt="people" className="w-full h-full" />
          </div>
  
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src={people2} alt="people" className="w-full h-full" />
          </div>
  
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src={people3} alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-30 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="https://pbs.twimg.com/media/EbNX_erVcAUlwIx?format=jpg&name=large" alt="people" className="w-full h-full rounded-full" />
          </div>
          <div className="absolute top-[350px] left-[200px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdmmJsXeW12jfbrigeUNnscbzVMlt5vpDz7TmwwZXIXhYsWwwe" alt="people" className="w-full h-full rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
  
  export default World;