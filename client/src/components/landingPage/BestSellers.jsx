import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../style';
import { staggerContainer  } from '../../utils/motion';
import  BestSellersCard  from '../../components/landingPage/BestSellersCard';
import { TitleText, TypingText } from '../../components/landingPage/TypingText';
import { exploreWorlds } from '../../utils/constances';
function BestSellers() {
    const [active, setActive] = useState('world-2');

    return (
      <section className={`${styles.paddings}`} id="explore">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <TypingText title="| Best sellers" textStyles="text-center" />
          <TitleText
            title={<>Our Best Sellers <br className="md:block hidden" /> to explore</>}
            textStyles="text-center"
          />
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {exploreWorlds.map((world, index) => (
              <BestSellersCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </section>
    );
  };

export default BestSellers