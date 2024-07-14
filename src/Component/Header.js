import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { TiMessages } from "react-icons/ti";






const Header = () => {
    return (
        <>
            <nav className="navbar-side" id="bottomNavbar">
                <li className="nav-item-header nav-item-header-home home" onclick="toggleActive(this, 'home')">
                    <a className="nav-link" href="#home">
                        <FaHome classNameName="nav-icon" />
                        {/* <div>Home</div> */}
                    </a>
                </li>
                <li className="nav-item-header search" onclick="toggleActive(this, 'search')">
                    <a className="nav-link" href="#abtme">
                        <IoIosPerson classNameName="nav-icon" />

                        {/* <div>Search</div> */}
                    </a>
                </li>
                <li className="nav-item-header notifications" onclick="toggleActive(this, 'notifications')">
                    <a className="nav-link" href="#projects">
                        <FaSuitcase classNameName="nav-icon" />

                        {/* <div>Notifications</div> */}
                    </a>
                </li>
                <li className="nav-item-header profile" onclick="toggleActive(this, 'profile')">
                    <a className="nav-link" href="#resume">
                        <MdOutlineContactPage classNameName="nav-icon" />

                        {/* <div>Profile</div> */}
                    </a>
                </li>
                <li className="nav-item-header profile" onclick="toggleActive(this, 'profile')">
                    <a className="nav-link" href="#contact">
                        <TiMessages classNameName="nav-icon" />

                        {/* <div>Profile</div> */}
                    </a>
                </li>
            </nav>


            <nav className="navbar-bottom" id="bottomNavbar">
                <li className="nav-item-header nav-item-header-home home" onclick="toggleActive(this, 'home')">
                    <a className="nav-link" href="#home">
                        <FaHome classNameName="nav-icon" />
                    </a>
                </li>
                <li className="nav-item-header search" onclick="toggleActive(this, 'search')">
                    <a className="nav-link" href="#abtme">
                        <IoIosPerson classNameName="nav-icon" />
                    </a>
                </li>
                <li className="nav-item-header notifications" onclick="toggleActive(this, 'notifications')">
                    <a className="nav-link" href="#projects">
                        <FaSuitcase classNameName="nav-icon" />
                    </a>
                </li>
                <li className="nav-item-header profile" onclick="toggleActive(this, 'profile')">
                    <a className="nav-link" href="#resume">
                        <MdOutlineContactPage classNameName="nav-icon" />
                    </a>
                </li>
                <li className="nav-item-header profile" onclick="toggleActive(this, 'profile')">
                    <a className="nav-link" href="#contact">
                        <TiMessages classNameName="nav-icon" />
                    </a>
                </li>
            </nav>
        </>
    );
}
export default Header