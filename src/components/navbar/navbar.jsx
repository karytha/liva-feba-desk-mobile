'use client'

import { useState } from 'react'
import './navbar.css'
import Button from '@/ui/button/Button';
import Image from 'next/image';

const NavBarLinks = [
    { name: 'HOME', link: '#slider' },
    { name: 'SOBRE A LIVA', link: '#about' },
    { name: 'EMPREENDIMENTOS', link: '#residential' },
    { name: 'NOTÍCIAS', link: '#' },
    { name: 'CONTATO', link: '#contact_section' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="navbar">
            <div className="navbar__inner">
                <a href="#slider" className="navbar__brand" onClick={closeMenu}>
                    <Image src="/liva.svg" alt="Liva" className="navbar__logo" width={30} height={30} />
                </a>

                <button
                    className={`navbar__toggle${isOpen ? ' is-open' : ''}`}
                    aria-label="Abrir menu"
                    aria-expanded={isOpen}
                    aria-controls="primary-navigation"
                    onClick={toggleMenu}
                    type="button"
                >
                    <Image src={isOpen ? "/close-icon.svg" : "/menu-button.svg"} alt="Menu" width={15} height={15} />
                </button>

                <nav id="primary-navigation" className={`navbar__menu${isOpen ? ' is-open' : ''}`}>
                    <ul className="navbar__list">
                        {NavBarLinks.map((item) => (
                            <li key={item.name} className="navbar__item">
                                <a href={item.link} className="navbar__link" onClick={closeMenu}>
                                    {item.name}
                                </a>
                            </li>
                        ))}

                    </ul>
                    <div className="navbar__social-media">
                        <p className='navbar__netwoork_message'> Acompanhe nas redes </p>
                        <div aria-hidden={!isOpen && undefined} style={{ display: 'flex' }}>

                            <a href="#" className="navbar__action" aria-label="Facebook">
                                <Image src="/instagram.svg" alt="Instagram" width={25} height={25} />
                            </a>
                            <a href="#" className="navbar__action" aria-label="Instagram">
                                <Image src="/facebook.svg" alt="Facebook" width={25} height={25} />

                            </a>
                        </div>
                        <div className='navbar__whatsapp'>
                            <div className='navbar__whatsapp-container'>

                                <Button variant='secondary'>
                                    <Image src="/whatsapp.svg" alt="WhatsApp" width={14} height={14} />
                                    WHATSAPP
                                </Button>
                            </div>

                        </div>
                    </div>
                </nav>

            </div>
        </header>
    );
};

export default Navbar