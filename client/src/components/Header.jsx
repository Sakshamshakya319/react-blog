import { Navbar, NavbarToggle, NavbarLink, TextInput, Button, NavbarCollapse } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaMoon } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';


function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className="border-b-2 !bg-white !text-black [&_a]:!text-black [&_a:hover]:!text-black [&_button]:!bg-white [&_button]:!text-black [&_button:hover]:!text-black">
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold !text-black'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Saksham's</span>
                Blog
            </Link>
            <form className='hidden lg:block'>
                <TextInput
                    type="text"
                    placeholder="Search...."
                    rightIcon={AiOutlineSearch}
                    className="!bg-white !text-black focus:!bg-white focus:!text-black hover:!bg-white hover:!text-black [&>input]:!bg-white [&>input]:!text-black"
                    style={{ background: "white", color: "black" }}
                />
            </form>
            {/* Mobile Search Button */}

            <Button
                className="lg:hidden bg-white text-black flex items-center justify-center w-14 h-14 rounded-full !outline-none !ring-0 focus:!outline-none focus:!ring-0 active:!outline-none active:!ring-0"
                color="white"
                pill
            >
                <FaSearch className="text-2xl" />
            </Button>

            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 hidden sm:inline !outline-none !ring-0 focus:!outline-none focus:!ring-0 active:!outline-none active:!ring-0" color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to="/sign-in">
                    <Button
                        as={Link}
                        to="/sign-in"
                        outline
                        className="!text-purple-600 !border-purple-600 transition-colors duration-300 hover:!bg-gradient-to-r hover:!from-purple-500 hover:!to-blue-500 hover:!text-white hover:!border-transparent"
                    >
                        Sign In
                    </Button>
                </Link>
            </div>
            <NavbarToggle />

            <NavbarCollapse>
                <NavbarLink active={path === '/'} as={'div'}>
                    <Link to='/'>Home</Link>
                </NavbarLink>
                <NavbarLink active={path === '/about'} as={'div'}>
                    <Link to='/about'>About</Link>
                </NavbarLink>
                <NavbarLink active={path === '/projects'} as={'div'} >
                    <Link to='/projects'>Projects</Link>
                </NavbarLink>

            </NavbarCollapse>
        </Navbar>
    )
}


export default Header