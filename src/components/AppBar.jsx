import React, { useEffect, useState } from 'react'
import './AppBar.css'

const AppBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navSections = [
        {
            title: 'Products',
            links: [
                { href: '/opal-tadpole', text: 'Tadpole' },
                { href: '/opal-c1', text: 'C1' },
                { href: '/opal-composer', text: 'Composer' },
            ],
        },
        {
            title: 'Company',
            links: [
                { href: '/about', text: 'About' },
                { href: '/terms', text: 'Terms' },
                { href: '/privacy', text: 'Privacy' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { href: 'https://support.opalcamera.com', text: 'Support' },
                { href: '/media-kit', text: 'Media Kit' },
                { href: '/opal-composer/download', text: 'Downloads' },
                { href: '/newsletter', text: 'Newsletter' },
            ],
        },
    ];

    return (
        <>
            <div
                className="fixed left-0 top-nav-offset z-[9996] hidden w-full transition-[top] duration-400 ease-o6 lg:block"
            >
                <div className="flex justify-between">
                    {/* Logo Section */}
                    <div id="nav-logo" className="naps-2 xl:naps-1">
                        <div className="col-span-2 mt-14">
                            <a
                                href="/"
                                className="Navigation_logoLink__kWsUK"
                                data-sentry-element="Link"
                                data-sentry-source-file="Navigation.tsx"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 62 31"
                                    className="Navigation_logoWordmark__h4Jp0"
                                    data-sentry-element="IconLogoWordmark"
                                    data-sentry-source-file="Navigation.tsx"
                                >
                                    <g fill={isScrolled ? 'black' : 'white'}  clipPath="url(#wordmark_svg__a)">
                                        <path d="M33.183 6.886c-2.386 0-4.464 1.112-5.483 2.796V7.156h-3.302V31H27.7v-9.261c.988 1.617 3.03 2.659 5.314 2.659 5.211 0 8.313-3.705 8.313-8.756-.004-5.052-2.968-8.756-8.144-8.756m-.476 14.65c-3.2 0-5.279-2.358-5.279-5.894s2.079-5.894 5.279-5.894c3.169 0 5.278 2.358 5.278 5.894s-2.11 5.893-5.278 5.893M49.908 6.886c-4.055 0-7.12 2.49-7.392 5.827h3.066c.102-1.72 1.838-3.2 4.224-3.2 2.657 0 4.156 1.414 4.156 3.47 0 .607-.373 1.01-1.157 1.01h-3.578c-4.054 0-6.676 2.02-6.676 5.287 0 3.03 2.314 5.118 5.826 5.118 2.59 0 4.77-1.215 5.585-3.031v2.76h3.303V13.183c.004-3.771-2.929-6.297-7.357-6.297m4.054 9.801c0 3.133-1.807 5.118-4.94 5.118-1.909 0-3.2-1.045-3.2-2.592 0-1.786 1.465-2.929 3.712-2.929h4.428zM62 .328h-3.302v23.8H62zM11.59 0C4.668 0 0 5.176 0 12.186S4.669 24.37 11.59 24.37c6.884 0 11.553-5.175 11.553-12.185S18.474 0 11.589 0m0 21.238c-4.812 0-7.923-3.846-7.923-9.052 0-5.207 3.111-9.053 7.922-9.053s7.886 3.846 7.886 9.052c0 5.207-3.075 9.053-7.886 9.053"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="wordmark_svg__a">
                                            <path fill={isScrolled ? 'black' : 'white'}  d="M0 0h62v31H0z"></path>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                    <div className={`ul-container ${isScrolled ? 'scrolled' : ''} footer-links col-span-4 gap-x-4 border-t border-t-black/10 px-2 pb-[110px] pt-[29px]  md:col-start-5 md:px-0 md:pb-0 lg:col-span-5 lg:col-start-8 lg:pt-[37px] xl:col-span-4 xl:col-start-9 xl:pt-[41px] 2xl:pt-[35px]`}>
                        <div>
                            <div className={`mb-[20px] text-[13px] font-400 2xl:text-[14px] ${isScrolled ? 'text-black' : 'text-white'}`}>
                                Products </div>

                            <a
                                
                                href="#"
                                className="mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]"
                            >
                                Tadpole
                            </a>
                            <a
                                
                                href="#"
                                className="mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]"
                            >
                                Opal C1
                            </a>
                            <a
                                
                                href="#"
                                className="mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]"
                            >
                                Composer
                            </a>


                        </div>

                        <div>
                            <div className={`mb-[20px] text-[13px] font-400 2xl:text-[14px] ${isScrolled ? 'text-black' : 'text-white'}`}>Company</div>

                            <a href='#' className='mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]' >About</a>
                            <a href='#' className='mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]' >Terms</a>
                            <a href='#' className='mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]' >Privacy</a>

                        </div>

                        <div>
                            <div className={`mb-[20px] text-[13px] font-400 2xl:text-[14px] ${isScrolled ? 'text-black' : 'text-white'}`}>Resources</div>

                            <a href="mailto:support@opalcamera.com" className="mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]" target="_blank" rel="noopener noreferrer">Support</a>
                            <a href="#" className="mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]">Media Kit</a>
                            <a href="#" className="mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]">Downloads</a>
                            <a href="#" className="mb-[9px] block text-[13px] font-medium text-white/40 hover:text-white 2xl:text-[14px]">Newsletter</a>

                        </div>
                    </div>
                    </div>

                    {/* NewsLetter */}
                    <div  className='mt-14'>
                        <div >

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-[23px] deep:fill-white" data-sentry-element="IconLogo" data-sentry-source-file="Bulletin.tsx" viewBox="0 0 30 24"><g clip-path="url(#a)"><path fill="#fff" fill-rule="evenodd" d="M21.96 5.306A12 12 0 0 0 11.398.014C5.191.318.178 5.447.005 11.66-.182 18.443 5.26 23.999 12 23.999c4.15 0 7.807-2.107 9.96-5.306l-9.813-6.416a.333.333 0 0 1 0-.554l9.813-6.415a11.92 11.92 0 0 1 2.04 6.69c0 2.48-.75 4.78-2.04 6.694l7.52 5.249c.223.147.52-.01.52-.277V.334a.333.333 0 0 0-.52-.277z" clip-rule="evenodd" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h30v24H0z" /></clipPath></defs></svg>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AppBar