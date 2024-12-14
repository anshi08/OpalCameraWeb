import { Grid, Typography } from '@mui/material'
import React from 'react'
import TadpoleImg from '../assets/tadpole.png'
import OpalC1 from '../assets/camera.png'
import Composer from '../assets/composer.png'
import './Tadpole.css'
import { motion } from 'framer-motion'

const Tadpole = () => {
    return (
        <>
            <div className='bg-customGray min-h-screen'>
                <div className='flex flex-col justify-center items-center'>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
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
                        <Typography className='main_heading cursor-pointer'>Tadpole</Typography>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
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
                        <Typography className='sub_heading cursor-pointer my-4'>The tiny webcam with a clip</Typography>
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
                    >
                        <h5 className='buy_btn my-4 mx-5 cursor-pointer'>Now $129</h5>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            // y: 0,
                            transition: {
                                duration: 2,
                            },
                        }}
                        viewport={{ once: true }}

                    >
                        <img src={TadpoleImg} className='my-8 mx-auto w-[139px] lg:w-[237px] xl:w-[210px] tadpolImg' />

                    </motion.div>
                    <hr className="w-full max-w-[100%] border-t-2 border-solid border-[#E1E1E1]" />

                    <Grid container spacing={5} padding={9} className="verticalLine" >
                        {/* for left side */}
                        <Grid item xs={12} md={6} display='flex' flexDirection='column'
                            justifyContent='center' alignItems='center'>

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
                                <Typography className='main_heading cursor-pointer'>Opal C1</Typography>
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
                            >
                                <Typography className='sub_heading cursor-pointer my-4'>The first professional webcam</Typography>
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
                            >
                                <h5 className='buy_btn my-4 mx-5 cursor-pointer'>$299</h5>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    // y: 0,
                                    transition: {
                                        duration: 2,
                                    },
                                }}
                                viewport={{ once: true }}
                            >
                                <img src={OpalC1} className='my-8 mx-auto w-[183px] lg:w-[274px] tadpolImg' />
                            </motion.div>
                        </Grid>

                        {/* For right side */}
                        <Grid item xs={12} md={6} display='flex' flexDirection='column' justifyContent='center'
                            alignItems='center'>

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
                            <Typography className='main_heading cursor-pointer'>Composer</Typography>
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
                    >
                            <Typography className='sub_heading cursor-pointer my-4'>The magic behind the camera</Typography>
</motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    // y: 0,
                                    transition: {
                                        duration: 2,
                                    },
                                }}
                                viewport={{ once: true }}
                            >
                                <img src={Composer} className='my-8 mx-auto w-[170px] lg:w-[206px] tadpolImg' />
                            </motion.div>
                        </Grid>
                    </Grid>
                    <hr className="w-full max-w-[100%] border-t-2 border-solid border-[#E1E1E1]" />
                </div>
            </div>
        </>
    )
}

export default Tadpole