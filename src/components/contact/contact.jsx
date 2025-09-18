'use client'
import React, { useState } from 'react'
import './contact.css'
import Button from '../../ui/button/Button'

const consultorData = [
    { name: 'Lara', image: '/lara.png' },
    { name: 'João', image: '/joao.png' },
    { name: 'Pedro', image: '/pedro.png' },
]

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        // Mark as submitted to trigger CSS validation styles
        setSubmitted(true)
        // Prevent default for now; hook up actual submit later if needed
        e.preventDefault()
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
                    <form className={`form ${submitted ? 'submitted' : ''}`} onSubmit={handleSubmit} noValidate>
                        <h3 className='form__title'>Fale agora mesmo com a Liva</h3>
                        <div className='form__group'>
                            <input className='form__input' type='text' name='name' placeholder='Nome' required />
                        </div>
                        <div className='form__group'>
                            <input className='form__input' type='tel' name='phone' placeholder='Telefone' required />
                        </div>
                        <div className='form__group'>
                            <input className='form__input' type='email' name='email' placeholder='E-mail' required />
                        </div>
                        <div className='form__group'>
                            <textarea className='form__textarea' name='message' placeholder='Mensagem' rows='5' />
                        </div>
                        <Button type='submit' variant='secondary' className='form__submit'>Enviar mensagem</Button>
                    </form>


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