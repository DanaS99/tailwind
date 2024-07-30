import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Ensure Font Awesome CSS is imported
import PopupForm from '../PopupForm/PopupForm';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const openForm = () => {
        setFormOpen(true);
    };

    const closeForm = () => {
        setFormOpen(false);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav_wrapper'>
                <div className='nav_content'>
                    <h2 className='logo'>My Portfolio</h2>
                    <ul>
                        <li><a href="#home" className='menu_item'>Home</a></li>
                        <li><a href="#skills" className='menu_item'>Skills</a></li>
                        <li><a href="#work-experience" className='menu_item'>Work Experience</a></li>
                        <li><a href="#contact" className='menu_item'>Contact Me</a></li>
                        <button className='contact_btn' onClick={openForm}>Hire Me</button>
                    </ul>
                    <button className='menu_btn' onClick={toggleMenu}>
                        <i className={`fas ${openMenu ? 'fa-times' : 'fa-bars'}`} style={{ fontSize: "1.8rem" }}></i>
                    </button>
                </div>
            </nav>
            <PopupForm isOpen={formOpen} onClose={closeForm} />
        </>
    );
}

export default Navbar;
