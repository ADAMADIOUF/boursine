import React, { useState } from 'react'
import{BsEnvelopeAt} from "react-icons/bs"
import { GiVibratingSmartphone } from 'react-icons/gi'
import{BiCurrentLocation} from "react-icons/bi"
import { useSendContactFormMutation } from '../slices/productsApiSlice'
const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [sendContactForm, { isLoading, isSuccess, isError }] =
    useSendContactFormMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const contactData = {
      nameContact: name,
      email,
      message,
      subject,
      phoneNumber,
    }

    // Send the contact form data
    await sendContactForm(contactData)

    // Handle success or error states here
    if (isSuccess) {
      setSuccessMessage('message envoyée avec succès.')
      clearForm()
setTimeout(() => {
  setSuccessMessage('')
}, 3000)
    } else if (isError) {
      
      console.error('Error submitting contact form')
    }
  }
  const clearForm = () => {
    setName('')
    setEmail('')
    setMessage('')
    setSubject('')
    setPhoneNumber('')
  }
  return (
    <div className='contact '>
      <div className='contact-container'>
        <article className='contact-info'>
          <h1>contact</h1>
          <p>
            <span>
              <BsEnvelopeAt />
            </span>
            <h5>mambiramediouf@gmail.com</h5>
          </p>
          <p>
            <span>
              <GiVibratingSmartphone />
            </span>
            <h5>+221 777062556</h5>
          </p>
          <p>
            <span>
              <GiVibratingSmartphone />
            </span>
            <h5>+221 777685456</h5>
          </p>
          <p>
            <span>
              <BiCurrentLocation />
            </span>
            <h5>senegal,diakhao,sine fatcik</h5>
          </p>
        </article>
        <article className='form-info'>
          <form onSubmit={handleSubmit} className='form'>
            <div className='input-form'>
              <input
                type='text'
                placeholder='nom'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='input-form'>
              <input
                type='email'
                placeholder='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='input-form'>
              <input
                type='text'
                placeholder='sujet'
                id='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className='input-form'>
              <input
                type='text'
                placeholder='numero de telephone'
                id='phoneNumber'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className='input-form '>
              <textarea
                cols='30'
                rows='10'
                placeholder='message'
                id='message'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type='submit' className='btn btn-contact'>
                envoyer message
              </button>
            </div>
          </form>
          {isLoading && <p>{successMessage}</p>}
          {isSuccess && <p>{successMessage}</p>}
          {isError && <p>Error sending message. Please try again.</p>}
        </article>
      </div>
    </div>
  )
}

export default Contact
