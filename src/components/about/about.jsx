import React from 'react'
import Image from 'next/image';
import './about.css';
import Button from '@/ui/button/Button';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about__image' >
                <Image src='/image-father-son.svg' alt='About' width={472} height={472} />
            </div>
            <div className='about__content'>
                <h2 className='about_title'>Contruimos confiança
                    e <span className='about_title__highlight'>realizamos sonhos!</span>
                </h2>
                <p className='about__description'>
                    Na Liva, cada projeto é planejado para facilitar a vida dos moradores, trazendo uma sensação máxima de bem-estar. Espaços que abrigam histórias de vida e que são desenvolvidos para que você viva momentos incríveis ao lado da sua família.                </p>
                <Button>Saiba mais</Button>
            </div>
        </div>
    )
}

export default About