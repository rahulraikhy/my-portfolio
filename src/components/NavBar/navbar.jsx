import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

export default function NavBar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleDarkMode = () => {
        if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    const handleContactClick = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuButton" onClick={handleContactClick}>
                Contact Me
            </button>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </nav>
    );
}


