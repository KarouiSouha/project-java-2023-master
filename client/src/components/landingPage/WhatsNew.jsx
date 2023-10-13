import { motion } from 'framer-motion';
import styles from '../../style';
import { newFeatures  } from '../../utils/constances';
import { planetVariants, staggerContainer, fadeIn  } from '../../utils/motion';
import { TitleText, TypingText } from '../../components/landingPage/TypingText';
import NewFeatures from "./NewFeatures";

const WhatsNew = () => (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Whats new?" />
          <TitleText title={<>What's new about Bazaar 3D?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
  
        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="https://media.discordapp.net/attachments/1108083766385188904/1144218408527876229/chemise-blanche-mot-t-dessus.png?width=643&height=662"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
  
  export default WhatsNew;