import { motion } from 'framer-motion';
import { footerVariants   } from '../../utils/motion';
import styles from '../../style';
import {socials}  from '../../utils/constances';

const Footer = () => (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className=" items-center justify-between flex-wrap gap-5">
        <h2 className="text-2xl font-semibold text-white mb-4">Contact us</h2>
        <p className='text-white'>Phone: 00968 24769821</p>
            <p className='text-white'>e-mail: bazaar3D@gmail.com</p>
        </div>
  
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
  
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              Bazaar 3D
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2023 Bazaar 3D. All rights reserved.
            </p>
  
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </motion.footer>
  );
  
  export default Footer;