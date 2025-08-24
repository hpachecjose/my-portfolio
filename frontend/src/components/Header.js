import React, { useState } from "react";
import '../assets/Header.css';
import '../assets/Fonts.css';
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="header" id="header">
            <div className="header-container">
                
                <div className="logo">
                    <a href="#header" aria-label="Go to top">
                        <h1 className="logo-text">Henrique Pacheco</h1>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre mim</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>

                {/* Social Links - Visible on all screens */}
                <div className="social-links">
                    <a href="https://github.com/hpachecjose" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <img src="/icons/github/icons8-github-150.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/henriquepachecojose/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src="/icons/linkedin/icons8-linkedin-150.png" alt="LinkedIn" />
                    </a>
                    <a href="mailto:henriquepachecj@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
                        <img src="/icons/gmail/icons8-gmail-novo-150.png" alt="Gmail" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-button"
                    onClick={toggleMobileMenu}
                    aria-expanded={mobileMenuOpen}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="mobile-nav">
                        <ul>
                            <li><a href="#header" onClick={toggleMobileMenu}>Home</a></li>
                            <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
                            <li><a href="#projects" onClick={toggleMobileMenu}>Projects</a></li>
                            <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
                        </ul>
                        <div className="mobile-social-links">
                            <a href="https://github.com/hpachecjose" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <img src="/icons/github/icons8-github-150.png" alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/henriquepachecojose/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <img src="/icons/linkedin/icons8-linkedin-150.png" alt="LinkedIn" />
                            </a>
                            <a href="mailto:henriquepachecj@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
                                <img src="/icons/gmail/icons8-gmail-novo-150.png" alt="Gmail" />
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;