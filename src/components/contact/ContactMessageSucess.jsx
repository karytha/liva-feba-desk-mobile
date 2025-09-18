import React from 'react'
import './contact-success.css'

const ContactMessageSucess = () => {
    return (
        <div className='contact-success' role='status' aria-live='polite'>
            <div className='contact-success__icon' aria-hidden='true'>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#D9F3EC" />
                    <path d="M7 12.5L10.2 15.7L17 8.9" stroke="#1aa584" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h4 className='contact-success__title'>Mensagem enviada com sucesso!</h4>
            <p className='contact-success__subtitle'>Aguarde que em instantes entraremos em contato.</p>
        </div>
    )
}

export default ContactMessageSucess 