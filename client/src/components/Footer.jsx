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
        <Footer container className='border border-t-8 border-teal-500 !bg-white !text-black font-semibold [&_a]:!text-black [&_a:hover]:!text-gray-800 [&_a]:font-semibold [&_a]:transition-colors [&_a]:duration-200'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link
                            to='/'
                            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
                        >
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                                Saksham's
                            </span>
                            Blog
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 !text-black'>
                        <div>
                            <FooterTitle className='!text-black' title='About' />
                            <FooterLinkGroup col>
                                <FooterLink
                                    href='https://www.linkedin.com/in/sakshamshakya337/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    100 JS Projects
                                </FooterLink>
                                <FooterLink
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Saksham's Blog
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className='!text-black' title='Follow us' />
                            <FooterLinkGroup col>
                                <FooterLink
                                    href='https://www.github.com/sakshamshakya319'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Github
                                </FooterLink>
                                <FooterLink href='#'>Discord</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className='!text-black' title='Legal' />
                            <FooterLinkGroup col>
                                <FooterLink href='#'>Privacy Policy</FooterLink>
                                <FooterLink href='#'>Terms &amp; Conditions</FooterLink>
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
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <FooterIcon href='#' icon={BsFacebook} />
                        <FooterIcon href='#' icon={BsInstagram} />
                        <FooterIcon href='#' icon={BsTwitter} />
                        <FooterIcon href='https://github.com/sakshamshakya319' icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom;