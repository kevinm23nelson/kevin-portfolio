import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';  
import './MessageMe.css';

const MessageMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false);
    const messageRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/message-me' && messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [location.pathname]);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_bfkunb3',  
                'template_ircbiyi',  
                formData,
                '-5u-3qwKUdpYEyLPM'      
            )
            .then(
                (result) => {
                    console.log('Email successfully sent!', result.text);
                    setIsSent(true); 
                    setFormData({ name: '', email: '', message: '' }); 
                },
                (error) => {
                    console.error('There was an error sending the email:', error.text);
                }
            );
    };

    return (
        <div className='message-me section-p'>
            <div className='container'>
                <div className='message-me-section'>
                    <div className='section-title'>
                        <h3 className='text-navy'>
                            contact <span className='text-dark'>me</span>
                        </h3>
                        {/* <p className='text' ref={messageRef}>
                            Get in touch with me!
                        </p> */}
                    </div>
                </div>

                <form className='message-me-form mx-auto' onSubmit={handleSubmit}>
                    <div className='form-elem'>
                        <input
                            type='text'
                            value={formData.name}
                            className='form-control'
                            placeholder='Name'
                            onChange={handleChange}
                            id='name'
                        />
                    </div>
                    <div className='form-elem'>
                        <input
                            type='email' // Make sure email field is of type 'email'
                            value={formData.email}
                            className='form-control'
                            placeholder='Email'
                            onChange={handleChange}
                            id='email'
                        />
                    </div>
                    <div className='form-elem'>
                        <textarea
                            rows='2'
                            value={formData.message}
                            className='form-control'
                            placeholder='Message'
                            onChange={handleChange}
                            id='message'
                        ></textarea>
                    </div>
                    <button type='submit' className='text submit-btn fw-3 fs-22'>
                        Submit
                    </button>
                    {isSent && <p className='success-message'>Your message has been sent!</p>} {/* Show success message */}
                </form>
            </div>
        </div>
    );
};

export default MessageMe;
