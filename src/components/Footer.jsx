import React from 'react'
import OpalLogo from '../assets/logo-black.3ec16790.png'
import './Footer.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
    return (
        <>
        
            <div className='mix-blend-difference'>
                <div className='px-2 md:px-4'>
                    <div className='footer relative pb-[24.66px] pt-[31.96px] md:pb-0'>
                        <img src={OpalLogo} alt="logo"
                            style={{ opacity: 1 }} className="transition-opacity duration-200 ease-default" />
                    </div>
                    <div class="relative mx-auto grid max-w-[1616px] grid-cols-4 gap-x-4 md:grid-cols-8 lg:mt-[-93px] lg:grid-cols-12 xl:mt-[-133px]">
                        {/* NewsLetter */}
                        <div className='relative col-span-4 hidden border-t border-t-black/10 
    pt-[29px] group-[.is]/theme-dark:border-t-black/20 md:block lg:pt-[37px] 
    xl:col-start-1 xl:pt-[41px] 2xl:pt-[35px]'>
                            <h5 className='mb-[20px] max-w-[254px] text-[20px] font-600 leading-[28px]'
                                style={{ fontWeight: 'bold' }}
                            >Subscribe to the
                                Opal Newsletter</h5>

                            <p className='mb-[23px] max-w-[247px] text-[13px] 
                            leading-[24px] text-opal-grey2 2xl:text-[14px]'>Latest news, musings, announcements and updates direct to your inbox.</p>

                            <a
                                href="javascript:void(0)"
                                className="footer-newsletter-link"
                            >
                                <ArrowForwardIcon
                                    className="arrow"
                                    style={{
                                        fontSize: '30px',
                                    }}
                                />
                            </a>

                        </div>

                        {/* Links */}
                        <div className='footer-links col-span-4 gap-x-4 border-t border-t-black/10 px-2 pb-[110px] pt-[29px]  group-[.is]/theme-dark:border-t-black/20 md:col-start-5 md:px-0 md:pb-0 lg:col-span-5 lg:col-start-8 lg:pt-[37px] xl:col-span-4 xl:col-start-9 xl:pt-[41px] 2xl:pt-[35px]'>
                            <div>
                                <div className='mb-[20px] text-[13px] font-400 text-black/40 2xl:text-[14px]'>
                                    Products </div>
                                <a href='#' className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Tadpole</a>
                                <a href="#" className='mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]'>Opal C1</a>
                                <a href="#" className='mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]'>Composer</a>
                            </div>

                            <div>
                                <div className='mb-[20px] text-[13px] font-400 text-black/40 2xl:text-[14px]'>Company</div>
                                <a href='#' className='mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]' >About</a>
                                <a href='#' className='mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]' >Terms</a>
                                <a href='#' className='mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]' >Privacy</a>
                            </div>

                            <div>
                                <div className="mb-[20px] text-[13px] font-400 text-black/40 2xl:text-[14px]">Resources</div>
                                <a href="mailto:support@opalcamera.com" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]" target="_blank" rel="noopener noreferrer">Support</a>
                                <a href="#" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Media Kit</a>
                                <a href="#" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Downloads</a>
                                <a href="#" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]">Newsletter</a>
                            </div>

                            <div>
                                <div className="mb-[20px] text-[13px] font-400 text-black/40 2xl:text-[14px]">Social</div>
                                <a href="https://www.instagram.com/opalcamera/" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]" target="_blank" rel="noopener noreferrer">Instagram</a>
                                <a href="https://twitter.com/opalcamera" className="mb-[9px] block text-[13px] font-medium text-black hover:text-black/50 2xl:text-[14px]" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </div>

                        </div>
                    </div>

                    <div class="mx-auto grid max-w-[1616px] grid-cols-4 gap-x-4 pt-5 md:grid-cols-8 md:pt-[64px] lg:grid-cols-12"><div class="relative col-span-4 grid grid-cols-4 items-center gap-x-4 leading-[0] md:col-span-8 md:grid-cols-8 lg:col-span-12 lg:grid-cols-12 xl:col-span-10 xl:col-start-1 xl:grid-cols-10"><div class="col-span-4 flex h-[65px] w-full  items-center justify-between border-t border-t-black/10 px-2 text-[14px] font-medium leading-[1] group-[.is]/theme-dark:border-t-black/20 md:h-[50px] md:px-0 md:pt-0"><div>Opal Camera Inc.</div><div>All rights reserved.</div></div><div class="hidden h-[65px] items-center justify-end leading-[0] md:col-span-4 md:flex md:h-[50px] lg:col-span-8 xl:col-span-6"></div></div></div>
                </div>
            </div>

        </>
    )
}

export default Footer