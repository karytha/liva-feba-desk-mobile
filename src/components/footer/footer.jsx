import React from 'react'
import Image from 'next/image'
import Button from '@/ui/button/Button'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__inner'>
                <div className='footer__col footer__brand'>
                    <Image src="/liva-grey.svg" alt="Liva" width={100} height={30} />
                    <p className='footer__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div className='footer__col footer__links'>
                    <span className='footer__heading'>NAVEGUE NO SITE</span>
                    <ul className='footer__nav'>
                        <li><a href="#slider">HOME</a></li>
                        <li><a href="#about">SOBRE A LIVA</a></li>
                        <li><a href="#residential">EMPREENDIMENTOS</a></li>
                        <li><a href="#news">NOTÍCIAS</a></li>
                        <li><a href="#contact_section">CONTATO</a></li>
                    </ul>

                </div>
                <div className='footer__col footer__social'>
                    <span>Acompanhe nas redes</span>
                    <div className='footer__icons'>
                        <a href="#" className="footer__action" aria-label="Instagram">
                            <Image src="/fb.svg" alt="Facebook" width={25} height={25} />

                        </a>
                        <a href="#" className="footer__action" aria-label="Facebook">
                            <Image src="/ig.svg" alt="Instagram" width={25} height={25} />
                        </a>

                    </div>
                </div>

                <div className='footer__col footer__contact'>
                    <p className='footer__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    <div className='footer__info'>
                        <a href="tel:+5511990909091">(11) 9090-9091</a>
                        <a href="mailto:contato@liva.com.br">contato@liva.com.br</a>
                    </div>
                    <div className='footer__whatsapp'>
                        <Button variant='secondary'>
                            <Image src="/whatsapp.svg" alt="WhatsApp" width={14} height={14} />
                            WHATSAPP
                        </Button>
                    </div>
                </div>
            </div>

            <div className='footer__bottom'>
                <span>Liva © 2022 Todos os direitos reservados.</span>
                <span>FEBACAPITAL</span>
            </div>
        </footer>
    )
}

export default Footer 