import React, { useState} from 'react';
import axios from 'axios';
import './newCustomers.css'

const NewCustomer = () => {

    const [customer, setCustomer] = useState({
        name: '',
        city: ''
    })

    const onChangeInput = (e) => {
        try {
            
            const { name, value } = e.target;

            setCustomer({...customer, [name]:value})
            
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post("http://localhost:5000/api/add", {...customer})

            window.location.href = "/customers"

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="newCustomers">
            <h1>Create new Customers</h1>
            <form onSubmit={formSubmit}>
                <div className="rows">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={customer.name} onChange={onChangeInput} required />
                </div>
                <div className="rows">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" value={customer.city} onChange={onChangeInput} required />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default NewCustomer
