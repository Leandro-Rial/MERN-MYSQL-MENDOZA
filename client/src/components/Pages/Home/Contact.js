import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'

const Contact = () => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    })

    const onChangeInput = (e) => {
        try {
            
            const { name, value } = e.target;

            setContact({...contact, [name]:value})
            
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post("http://localhost:5000/contact/send", {...contact})

            window.location.href = "/"

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="contact">
            <h1>Contact</h1>
            <form onSubmit={formSubmit}>
                <div className="rows">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={contact.name} onChange={onChangeInput} required />
                </div>
                <div className="rows">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={contact.email} onChange={onChangeInput} required />
                </div>
                <div className="rows">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="8" value={contact.message} onChange={onChangeInput} required />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact
