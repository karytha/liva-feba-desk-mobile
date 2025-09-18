'use client'
import React, { useState } from 'react'
import './contact.css'
import Button from '../../ui/button/Button'
import ContactMessageSucess from './ContactMessageSucess'

const consultorData = [
    { name: 'Lara', image: '/lara.png' },
    { name: 'João', image: '/joao.png' },
    { name: 'Pedro', image: '/pedro.png' },
]

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const [email, setEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(undefined)

    const [phone, setPhone] = useState('')
    const [isPhoneValid, setIsPhoneValid] = useState(undefined)

    const [showSuccess, setShowSuccess] = useState(false)

    const validateEmail = (value) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        return re.test(String(value).toLowerCase())
    }

    const handleEmailChange = (e) => {
        const value = e.target.value
        setEmail(value)
        if (value === '') setIsEmailValid(undefined)
        else setIsEmailValid(validateEmail(value))
    }

    const formatPhone = (digits) => {
        const only = digits.replace(/\D/g, '')
        const withDdd = only.replace(/^(\d{2})(\d)/, '($1) $2')
        const withDash = withDdd.replace(/(\d{5})(\d{4})$/, '$1-$2')
        return withDash
    }

    const validatePhone = (value) => {
        const only = value.replace(/\D/g, '')
        return only.length === 11
    }

    const handlePhoneChange = (e) => {
        const raw = e.target.value
        const masked = formatPhone(raw)
        setPhone(masked)
        if (raw.replace(/\D/g, '') === '') setIsPhoneValid(undefined)
        else setIsPhoneValid(validatePhone(masked))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        let valid = true
        if (!validateEmail(email)) { setIsEmailValid(false); valid = false }
        if (!validatePhone(phone)) { setIsPhoneValid(false); valid = false }
        if (!valid) { return }

        const formEl = e.currentTarget
        formEl?.reset()
        setEmail('')
        setIsEmailValid(undefined)
        setPhone('')
        setIsPhoneValid(undefined)
        setSubmitted(false)

        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
    }

    return (
        <div className='contact'>
            <div className='contact__content'>
                <div className='contact__info'>
                    <h2 className='contact__title'>Fale agora com um consultor de vendas</h2>
                    <div className='contact__description'>Tire suas dúvidas e  conheça de perto o seu
                        <p className='contact__description_highlight'>novo jeito de morar.</p></div>

                    <div className='consultants consultants--desktop'>
                        <span className='consultants__label'>Consultores online</span>
                        <div className='consultants__avatars'>
                            {consultorData.map((c, idx) => (
                                <div
                                    key={c.name + idx}
                                    className='consultants__avatar'
                                    title={c.name}
                                    aria-label={c.name}
                                    style={{ backgroundImage: `url(${c.image})` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='contact__form'>
                    {showSuccess ? (
                        <ContactMessageSucess />
                    ) : (
                        <form className={`form ${submitted ? 'submitted' : ''}`} onSubmit={handleSubmit} noValidate>
                            <h3 className='form__title'>Fale agora mesmo com a Liva</h3>
                            <div className='form__group'>
                                <input className='form__input' type='text' name='name' placeholder='Nome' required />
                            </div>
                            <div className='form__group'>
                                <input
                                    className={`form__input ${isPhoneValid === false ? 'is-invalid' : ''} ${isPhoneValid === true ? 'is-valid' : ''}`.trim()}
                                    type='tel'
                                    name='phone'
                                    placeholder='Telefone'
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    aria-invalid={isPhoneValid === false}
                                    inputMode='numeric'
                                    required
                                />
                                {isPhoneValid === false && (
                                    <span className='form__error'>*por favor, informe um telefone válido</span>
                                )}
                            </div>
                            <div className='form__group'>
                                <input
                                    className={`form__input ${isEmailValid === false ? 'is-invalid' : ''} ${isEmailValid === true ? 'is-valid' : ''}`.trim()}
                                    type='email'
                                    name='email'
                                    placeholder='E-mail'
                                    value={email}
                                    onChange={handleEmailChange}
                                    aria-invalid={isEmailValid === false}
                                    required
                                />
                                {isEmailValid === false && (
                                    <span className='form__error'>*por favor, preencher corretamente</span>
                                )}
                            </div>
                            <div className='form__group'>
                                <textarea className='form__textarea' name='message' placeholder='Mensagem' rows='5' />
                            </div>
                            <Button type='submit' variant='secondary' className='form__submit'>Enviar mensagem</Button>
                        </form>
                    )}


                </div>
                <div className='consultants consultants--mobile'>
                    <span className='consultants__label'>Consultores online</span>
                    <div className='consultants__avatars'>
                        {consultorData.map((c, idx) => (
                            <div
                                key={'m-' + c.name + idx}
                                className='consultants__avatar'
                                title={c.name}
                                aria-label={c.name}
                                style={{ backgroundImage: `url(${c.image})` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact  