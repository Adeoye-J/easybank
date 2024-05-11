import React, { useState } from 'react'
import logo from "../../images/logo.svg"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./header.css"

const Menu = () => {
    return (
        <>
            <li className='list-item'>Home</li>
            <li className='list-item'>About</li>
            <li className='list-item'>Contact</li>
            <li className='list-item'>Blog</li>
            <li className='list-item'>Careers</li>
        </>
    )
}

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <div>
            <div className="header-container">
                <img src={logo} alt="Logo" />
                <div className="mobile-menu-bar">
                    {toggleMenu ? <RiCloseLine size={24} style={{cursor: "pointer"}} onClick={handleToggleMenu} /> : <RiMenu3Line size={24} style={{cursor: "pointer"}} onClick={handleToggleMenu} />}
                    {toggleMenu &&
                        <div className='menu-list-items'>
                            <Menu />
                        </div>
                    }

                </div>
                
                <div className="menu-bar">
                    <div className='list-items'>
                        <Menu />
                    </div>
                </div>
                <button type='request'>Request Invite</button>
            </div>
        </div>
    )
}

export default Header