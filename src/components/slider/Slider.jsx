'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import './slider.css'

import slide1 from '@/assets/barra-view-1.svg'
import slide2 from '@/assets/barra-view-2.svg'
import slide3 from '@/assets/barra-view-3.svg'

const Slider = () => {
    const slides = useMemo(() => ([
        { src: slide1, title: 'Barra View', badge: 'PRÉ LANÇAMENTO', subtitle: 'Apartamento com 3 dormitórios sendo 1 suíte', ctaLabel: 'SAIBA MAIS', href: '#' },
        // { src: slide2, title: 'Barra View', badge: 'PRÉ LANÇAMENTO', subtitle: 'Apartamento com 3 dormitórios sendo 1 suíte', ctaLabel: 'SAIBA MAIS', href: '#' },
        // { src: slide3, title: 'Barra View', badge: 'PRÉ LANÇAMENTO', subtitle: 'Apartamento com 3 dormitórios sendo 1 suíte', ctaLabel: 'SAIBA MAIS', href: '#' },
    ]), [])

    const [current, setCurrent] = useState(0)

    const goTo = (index) => {
        const total = slides.length
        const nextIndex = (index + total) % total
        setCurrent(nextIndex)
    }

    const next = () => goTo(current + 1)
    const prev = () => goTo(current - 1)

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((c) => (c + 1) % slides.length)
        }, 6000)
        return () => clearInterval(id)
    }, [slides.length])

    return (
        <section className="slider" aria-roledescription="carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slider__slide${index === current ? ' is-active' : ''}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} de ${slides.length}`}
                >
                    <Image
                        className="slider__image"
                        src={slide.src}
                        alt={slide.title}
                        priority={index === 0}
                        fill
                        sizes="100vw"
                    />

                    <div className="slider__overlay">
                        <span className="slider__badge">{slide.badge}</span>
                        <h1 className="slider__title">{slide.title}</h1>
                        <span className="slider__subtitle">{slide.subtitle}</span>
                        <a className="slider__cta" href={slide.href}>{slide.ctaLabel}</a>
                    </div>
                </div>
            ))}

            <button className="slider__nav slider__nav--prev" aria-label="Slide anterior" onClick={prev} type="button">
                <span aria-hidden>‹</span>
            </button>
            <button className="slider__nav slider__nav--next" aria-label="Próximo slide" onClick={next} type="button">
                <span aria-hidden>›</span>
            </button>

            <div className="slider__dots" role="tablist" aria-label="Seleção de slides">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`slider__dot${idx === current ? ' is-active' : ''}`}
                        onClick={() => goTo(idx)}
                        role="tab"
                        aria-selected={idx === current}
                        aria-controls={`slide-${idx}`}
                        type="button"
                        title={`Ir para slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Slider 