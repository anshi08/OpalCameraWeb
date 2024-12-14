import React from 'react';
import ImgDesktop from '../assets/Banner1.webp';
import ImgMobile from '../assets/Mobile_Banner.webp';
import './Banner.css';
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <div className="banner-container">
            <picture>
                <source media="(max-width: 768px)" srcSet={ImgMobile} />
                <source media="(min-width: 769px)" srcSet={ImgDesktop} />
                <img src={ImgDesktop} alt="Banner" className="banner-image" />
            </picture>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                    },
                }}
                viewport={{ once: true }}
                className="banner-content"
            >
                <h2>The first webcam designed for laptops.</h2>
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                    },
                }}
                viewport={{ once: true }}
                className='btn cursor-pointer'
            >
           
                <h6>Available now for $129.</h6>
            </motion.div>
        </div>
    );
};

export default Banner;
