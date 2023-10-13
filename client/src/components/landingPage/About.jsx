import React from 'react'
import { motion } from 'framer-motion';
import { TypingText } from './TypingText'
import { arrowdown } from "../../assets/index";
import styles from '../../style';
import { fadeIn, staggerContainer } from '../../utils/motion';
function About() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Bazaar 3D" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Bazaar 3D</span> is a website, where creativity meets fashion! We are a leading online store specializing in customized clothing that allows you to bring your unique style to life,
        we offer a revolutionary {' '}
        <span className="font-extrabold text-white">
        3D modeling
        </span>{' '} feature that enables you to design and personalize your garments like never before,
        Whether you're looking for a {' '}
        <span className="font-extrabold text-white">
        one-of-a-kind
        </span>{' '} t-shirt, hoodie, or even accessories, our user-friendly interface makes it easy to unleash your imagination and create a truly bespoke piece. From choosing the fabric, color, and pattern to adding your own artwork or text, the possibilities are endless.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src={arrowdown}
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);}

export default About