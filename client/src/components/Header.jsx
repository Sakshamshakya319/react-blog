import { Navbar, NavbarToggle, NavbarLink,Avatar, TextInput, Button, NavbarCollapse, Dropdown, DropdownHeader,DropdownItem,DropdownDivider } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';

function Header() {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.user);
    
    return (
        <Navbar className="border-b-2 bg-white text-black border-gray-300 transition-colors duration-300" style={{ fontFamily: 'Soege, sans-serif' }}>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-black'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Saksham's</span>
                Blog
            </Link>
            <form className='hidden lg:block'>
                <TextInput
                    type="text"
                    placeholder="Search...."
                    rightIcon={AiOutlineSearch}
                    className="bg-white text-black focus:bg-white focus:text-black border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-purple-500"
                    style={{ border: '1px solid #d1d5db' }}
                />
            </form>
            {/* Mobile Search Button */}

            <button
                className="lg:hidden bg-white text-black flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 hover:bg-gray-100 border border-gray-300 shadow-sm"
                style={{ border: '1px solid #d1d5db' }}
            >
                <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
            </button>

            <div className="flex gap-2 md:order-2">
                {currentUser ? (
                    <Dropdown
                        className='bg-white text-black'
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                            alt="user"
                            img={currentUser.profilePicture}
                            rounded
                            />
                        }
                        >
                        <DropdownHeader>
                            <span className='block text-sm text-black'>@{currentUser.username}</span>
                            <span className='block text-sm text-black font-medium truncate'>{currentUser.email}</span>
                        </DropdownHeader>
                        <Link className='bg-white' to={'/dashboard?tab=profile'}>
                        <DropdownItem >Profile</DropdownItem>                        
                        </Link>
                        <DropdownDivider/>
                        <DropdownItem>Sign Out</DropdownItem>
                    </Dropdown>
                ):(
                    <Link to="/sign-in">
                    <Button
                        as={Link}
                        to="/sign-in"
                        outline
                        className="text-purple-600 border-purple-600 transition-colors duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:border-transparent"
                    >
                        Sign In
                    </Button>
                </Link>
                )
                }
                
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