'use client'

import { useEffect, useId, useRef, useState } from 'react'
import './dropdown.css'

const ChevronDown = (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
        <path d="M3.75736 5.75736L8 10L12.2426 5.75736" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChevronUp = (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
        <path d="M12.2426 10.2426L8 6L3.75736 10.2426" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Dropdown = ({
    options = [],
    value,
    onChange,
    placeholder = 'Select',
    className = '',
    success = false,
}) => {
    const [open, setOpen] = useState(false);
    const [internal, setInternal] = useState(undefined);
    const id = useId();
    const btnRef = useRef(null);
    const listRef = useRef(null);

    const selected = value !== undefined ? value : internal;

    useEffect(() => {
        const onDoc = (e) => {
            if (!btnRef.current || !listRef.current) return;
            if (btnRef.current.contains(e.target) || listRef.current.contains(e.target)) return;
            setOpen(false);
        };
        document.addEventListener('mousedown', onDoc);
        return () => document.removeEventListener('mousedown', onDoc);
    }, []);

    const handleSelect = (opt) => {
        if (onChange) onChange(opt);
        else setInternal(opt);
        setOpen(false);
        btnRef.current?.focus();
    };

    const toggle = () => setOpen((o) => !o);

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') setOpen(false);
        if ((e.key === 'Enter' || e.key === ' ') && !open) {
            e.preventDefault();
            setOpen(true);
        }
        if ((e.key === 'ArrowDown' || e.key === 'Down') && open) {
            e.preventDefault();
            const first = listRef.current?.querySelector('[role="option"]');
            first?.focus();
        }
    };

    return (
        <div className={`dd ${className}`.trim()}>
            <button
                ref={btnRef}
                type="button"
                id={id}
                className={`dd__control${success ? ' is-success' : ''}`}
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={toggle}
                onKeyDown={handleKeyDown}
            >
                <span className={`dd__value${!selected ? ' is-placeholder' : ''}`}>
                    {selected ? selected.label ?? String(selected) : placeholder}
                </span>
                {open ? <ChevronUp className="dd__chevron" /> : <ChevronDown className="dd__chevron" />}
            </button>

            {open && (
                <ul
                    ref={listRef}
                    className="dd__list"
                    role="listbox"
                    aria-labelledby={id}
                >
                    {options.map((opt) => {
                        const isSelected = (selected && (selected.value ?? selected) === (opt.value ?? opt));
                        return (
                            <li
                                key={(opt.value ?? opt).toString()}
                                role="option"
                                aria-selected={isSelected}
                                tabIndex={0}
                                className={`dd__option${isSelected ? ' is-selected' : ''}`}
                                onClick={() => handleSelect(opt)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') handleSelect(opt);
                                }}
                            >
                                {opt.label ?? String(opt)}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Dropdown 