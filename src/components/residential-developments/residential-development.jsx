'use client'
import React, { useState } from 'react'
import './residential-development.css'
import FilterButton from '@/ui/filter-button/FilterButton'
import Dropdown from '@/ui/dropdown/Dropdown'
import { projectStage, projectType, projectLocation } from '@/constants/filters'
import { developments } from '@/constants/developments'
import Image from 'next/image'
import Button from '@/ui/button/Button'

// Images map (SVGs under src/assets)
import imgHorizonte from '@/assets/horizonte-residence.svg'
import imgBlueCoast from '@/assets/blue-coast-tower.svg'
import imgGrandPlace2 from '@/assets/grand-place-tower-2.svg'
import imgGrandPlace from '@/assets/grand-place-tower.svg'
import imgImperium from '@/assets/imperium-tower.svg'
import imgInfinity from '@/assets/infinity-coast.svg'
import imgOne from '@/assets/one-tower.svg'
import imgSkyline from '@/assets/skyline-tower.svg'
import imgTitanium from '@/assets/titanium-tower.svg'

const imageMap = {
    'src/assets/horizonte-residence.svg': imgHorizonte,
    'src/assets/blue-coast-tower.svg': imgBlueCoast,
    'src/assets/grand-place-tower-2.svg': imgGrandPlace2,
    'src/assets/grand-place-tower.svg': imgGrandPlace,
    'src/assets/imperium-tower.svg': imgImperium,
    'src/assets/infinity-coast.svg': imgInfinity,
    'src/assets/one-tower.svg': imgOne,
    'src/assets/skyline-tower.svg': imgSkyline,
    'src/assets/titanium-tower.svg': imgTitanium,
}

const IconBed = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rd-feature__icon" aria-hidden="true">
        <path d="M3 7.5V18M21 18V12.5C21 10.843 19.657 9.5 18 9.5H12M3 12H12M3 12V7.5M12 12V9.5M7.5 9.5C8.881 9.5 10 8.381 10 7C10 5.619 8.881 4.5 7.5 4.5C6.119 4.5 5 5.619 5 7C5 8.381 6.119 9.5 7.5 9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const IconCondo = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rd-feature__icon" aria-hidden="true">
        <path d="M3 21H21M6 21V5C6 4.448 6.448 4 7 4H13C13.552 4 14 4.448 14 5V21M10 21V8H18C18.552 8 19 8.448 19 9V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 6.5H11.5M8.5 9.5H11.5M8.5 12.5H11.5M8.5 15.5H11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
)

const ResidentialDevelopment = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const toggleFilters = () => {
        setIsFilterOpen(!isFilterOpen)
    }

    return (
        <div className='residential-development'>
            <div className='residential-development__header'>
                <h2 className='residential-development__title'>Confira todos os <p>empreendimentos da Liva</p></h2>
                <div className='residential-development__filter'>
                    <FilterButton onToggle={toggleFilters} />
                </div>
            </div>
            <div className={`${isFilterOpen ? 'residential-development__filter-mobile' : 'residential-development__filter-mobile is-closed'}`}>
                <Dropdown options={projectStage} placeholder='Estagio do empreendimento' />
                <Dropdown options={projectLocation} placeholder='Localização' />
                <Dropdown options={projectType} placeholder='Tipo de imóvel' />
            </div>


            <div className='residential-development__content'>
                {developments.map((dev, idx) => (
                    <a key={dev.name + idx} className={`rd-card ${idx === 0 ? 'rd-card--feature' : ''}`} href="#" aria-label={dev.name}>
                        <Image src={imageMap[dev.image]} alt={dev.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className='rd-card__img' />
                        <div className='rd-card__overlay'>
                            {dev.badge && <span className='rd-card__badge'>{dev.badge}</span>}
                            <h3 className='rd-card__title'>{dev.name}</h3>
                            <div className='rd-card__meta'>
                                <div className='rd-card__meta-item'>
                                    <span className='rd-card__meta-label'>Cidade</span>
                                    <span className='rd-card__meta-value'>{dev.city}</span>
                                </div>
                                <div className='rd-card__meta-item'>
                                    <span className='rd-card__meta-label'>Bairro</span>
                                    <span className='rd-card__meta-value'>{dev.Bairro}</span>
                                </div>
                            </div>
                            {dev.badge && (
                                <ul className='rd-card__features'>
                                    <li className='rd-feature'>
                                        <IconBed />
                                        <span>Apartamento com 3 dormitórios sendo 1 suíte</span>
                                    </li>
                                    <li className='rd-feature'>
                                        <IconCondo />
                                        <span>Condomínio Fechado</span>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </a>
                ))}
            </div>

            <div className='residential-development__load-more'>
                <Button>Carregar mais</Button>
            </div>


        </div>
    )
}

export default ResidentialDevelopment