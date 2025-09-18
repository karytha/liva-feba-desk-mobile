'use client'
import React, { useState } from 'react'
import './filter-button.css'

const FilterIcon = ({ className = '' }) => (
    <svg className={`filter-btn__icon ${className}`.trim()} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M3 6H21M6 12H18M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
)

const CloseIcon = ({ className = '' }) => (
    <svg className={`filter-btn__icon ${className}`.trim()} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
)

const FilterButton = ({
    label = 'Filtros',
    isActive: isActiveProp,
    onToggle,
    className = '',
    ...props
}) => {
    const [isActiveInternal, setIsActiveInternal] = useState(false)
    const isControlled = typeof isActiveProp === 'boolean'
    const isActive = isControlled ? isActiveProp : isActiveInternal

    const handleClick = (e) => {
        if (!isControlled) setIsActiveInternal(prev => !prev)
        onToggle && onToggle(!isActive, e)
    }

    return (
        <button
            type="button"
            className={`filter-btn ${isActive ? 'is-active' : ''} ${className}`.trim()}
            aria-pressed={isActive}
            onClick={handleClick}
            {...props}
        >
            {isActive ? <CloseIcon /> : <FilterIcon />}
            <span className="filter-btn__label">{label.toUpperCase()}</span>
        </button>
    )
}

export default FilterButton 