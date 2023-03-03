import React, { useState } from 'react';

/* React-Router-Dom was used to create routing, check the repo 
* https://github.com/sarahcssiqueira/react-router-dom
* and see how to config it properly  */
import { Link } from 'react-router-dom';


/* Icons from  npm react-icons */
import { MdClose } from "react-icons/md"
import { TfiAlignRight } from "react-icons/tfi";


export default function Navbar () {

    const [navbarOpen,setNavbarOpen] = useState (false);
    const handleToggle = () => {setNavbarOpen (prev => !prev)};
    const closeMenu = () => {setNavbarOpen(false) };
    
    return (
        /* CSS classes used to hide/show menu */
        <nav className='navbar-mobile'>
            <button onClick={handleToggle}> 
                {navbarOpen ? <MdClose/> : <TfiAlignRight/>}
            </button>
            <ul className={`menu-nav ${navbarOpen ? " show-menu" : ""}`}>
                <Link to="/link1">
                    <li className="" 
                        onClick={() => closeMenu()}
                        exact>
                        Link 1
                    </li>
                </Link>
                <Link to="/link2">
                    <li className="" 
                        onClick={() => closeMenu()}
                        exact>
                        Link 2
                    </li>
                </Link>
                <Link to="/link3">
                    <li className="" 
                        onClick={() => closeMenu()}
                        exact>
                        Link 3
                    </li>
                </Link>
            </ul>
        </nav>
    )
};