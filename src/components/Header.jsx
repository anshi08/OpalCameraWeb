import React from 'react';
import ImgDesktop from '../assets/Banner1.webp';
import ImgMobile from '../assets/Mobile_Banner.webp';
import { motion } from 'framer-motion';
import './Header.css';
import AppBar from './AppBar.jsx';

const Header = () => {

    const playAudio = () => {
        const audio = new Audio('https://opalcamera.com/beats.mp3');
        audio.play();
    };

    return (
        <>
        <AppBar />
        <section>
            <div
                className="relative aspect-[376/767] md:aspect-[752/1256] lg:aspect-[1024/1407] xl:aspect-[1408/1408] 2xl:aspect-[1648/1408] 3xl:aspect-[2160/1408]"
            >
                <picture className="block">
                    <source media="(max-width: 768px)" srcSet={ImgMobile} />
                    <source media="(min-width: 769px)" srcSet={ImgDesktop} />
                    <img src={ImgDesktop} alt="Banner" className="banner-image" />
                </picture>
                <div className="absolute left-0 top-0 h-full w-full">
                    <div className="mx-auto h-full max-w-[1648px] grid-cols-12 gap-x-4 px-4 lg:grid">
                        <div className="col-span-10 col-start-2">
                            
                            <div className="pt-[157px] text-center md:pt-[170px] lg:pt-[275px] lg:text-left xl:pt-[315px] 2xl:pt-[468px]">
                                
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
                                >
                                    <p className="hero-title 4xl:text-[48px] 4xl:leading-[52px] pb-2.5 pb-[22px] text-[24px] font-[400] leading-[32px] tracking-common text-white md:text-[32px] md:font-[300] md:leading-[40px] lg:text-left xl:text-[40px] xl:leading-[48px]">
                                        <span className="y-w block">
                                            <span
                                                className="y"
                                                style={{ transform: 'translateY(0%) translateZ(0px)' }}
                                            >
                                                The first webcam
                                            </span>
                                        </span>
                                        <span className="y-w block">
                                            <span
                                                className="y"
                                                style={{ transform: 'translateY(0%) translateZ(0px)' }}
                                            >
                                                designed for laptops.
                                            </span>
                                        </span>
                                    </p>
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
                                    className="btn cursor-pointer mt-[15px] inline-flex h-[40px] items-center justify-center rounded-full bg-opal-yellow-digital pt-[3px] text-[16px] font-[400] opacity-0 lg:pt-0"
                                    onClick={playAudio}
                                >
                                    <h6>Available now for $129.</h6>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Header;
