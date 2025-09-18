import { useState } from 'react'

export const useContactForm = () => {
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

    const reset = () => {
        setEmail('')
        setIsEmailValid(undefined)
        setPhone('')
        setIsPhoneValid(undefined)
        setSubmitted(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        let valid = true
        if (!validateEmail(email)) { setIsEmailValid(false); valid = false }
        if (!validatePhone(phone)) { setIsPhoneValid(false); valid = false }
        if (!valid) return

        e.currentTarget?.reset()
        reset()
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
    }

    return {
        submitted,
        email, isEmailValid, setEmail, handleEmailChange,
        phone, isPhoneValid, setPhone, handlePhoneChange,
        showSuccess,
        handleSubmit,
    }
}

export default useContactForm 