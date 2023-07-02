import { FaBars, FaTimes } from "react-icons/fa";
import {useRef}  from 'react';
import logo_white from "../images/logo_white.png";

const Navbar = () => {

    const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    
    return ( 
        <header className='z-10 top-0'>
            <img className="lg:pl-16 mt-6 lg:mt-9 w-20 lg:w-[166px]" src={logo_white} alt="DzayerGo" />
            <nav ref={navRef} className='Btns px-36 mx-[10px] ml-56 mr-auto'>

                <button onClick={showNavbar}>
                    <a className=' relative p-[10px] ml-[15px] ' href="#about us"> About us </a>
                 </button>
                 <button onClick={showNavbar}>
                    <a className=' relative p-[10px] ml-[15px] ' href="#download"> Download </a>
                 </button>
                 <button onClick={showNavbar}>
                    <a className=' relative p-[10px] ml-[15px] ' href="#footer"> Contact us </a>
                 </button>

                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
     );
}
 
export default Navbar;