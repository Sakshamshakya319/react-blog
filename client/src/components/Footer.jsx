import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import { 
    Footer, 
    FooterCopyright, 
    FooterDivider, 
    FooterIcon, 
    FooterLink, 
    FooterLinkGroup, 
    FooterTitle 
} from 'flowbite-react';

function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-teal-500 bg-white text-black border-gray-300 transition-colors duration-300' style={{ fontFamily: 'Soege, sans-serif' }}>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link
                            to='/'
                            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-black'
                        >
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                                Saksham's
                            </span>
                            Blog
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 text-black'>
                        <div>
                            <FooterTitle className='text-black' title='About' />
                            <FooterLinkGroup col>
                                <FooterLink
                                    href='https://www.linkedin.com/in/sakshamshakya337/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-600 hover:text-black'
                                >
                                    100 JS Projects
                                </FooterLink>
                                <FooterLink
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-600 hover:text-black'
                                >
                                    Saksham's Blog
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className='text-black' title='Follow us' />
                            <FooterLinkGroup col>
                                <FooterLink
                                    href='https://www.github.com/sakshamshakya319'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-600 hover:text-black'
                                >
                                    Github
                                </FooterLink>
                                <FooterLink href='#' className='text-gray-600 hover:text-black'>Discord</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className='text-black' title='Legal' />
                            <FooterLinkGroup col>
                                <FooterLink href='#' className='text-gray-600 hover:text-black'>Privacy Policy</FooterLink>
                                <FooterLink href='#' className='text-gray-600 hover:text-black'>Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <FooterCopyright
                        href='#'
                        by="Saksham's blog"
                        year={new Date().getFullYear()}
                        className='text-gray-600'
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <FooterIcon href='#' icon={BsFacebook} className='text-gray-600 hover:text-black' />
                        <FooterIcon href='#' icon={BsInstagram} className='text-gray-600 hover:text-black' />
                        <FooterIcon href='#' icon={BsTwitter} className='text-gray-600 hover:text-black' />
                        <FooterIcon href='https://github.com/sakshamshakya319' icon={BsGithub} className='text-gray-600 hover:text-black' />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom;