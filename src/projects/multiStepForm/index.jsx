import React, { useState } from 'react'
import './multiStep.css'

const MultiStepForm = () => {
    const [step, setStep] = useState(1)
    const [isSubmit, setIsSubmit] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', dob: '', password: '' });

    const handleNext = () => {
        setStep(step + 1)
    }

    const handleBack = () => {
        setStep(step - 1)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("form submitted")
        setIsSubmit(true)
    }

    return (
        <div className='multi-step'>
            {!isSubmit ? (<form>
                {
                    step === 1 && (<div className='container'>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter your name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <button onClick={handleNext}>Next</button>
                    </div>)
                }
                {
                    step === 2 && (<div className='container'>
                        <button onClick={handleBack}>Back</button>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <button onClick={handleNext}>Next</button>
                    </div>)
                }
                {
                    step === 3 && (<div className='container'>
                        <button onClick={handleBack}>Back</button>
                        <label>DOB</label>
                        <input
                            type="date"
                            name="dob"
                            placeholder='Enter your DOB'
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        <button onClick={handleNext}>Next</button>
                    </div>)
                }
                {
                    step === 4 && (<div className='container'>
                        <button onClick={handleBack}>Back</button>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter your password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>)
                }
            </form>) : (

                <div>
                    <h1>Submitted Data:</h1>
                    <p>Name : {formData.name}</p>
                    <p>Email : {formData.email}</p>
                    <p>DOB : {formData.dob}</p>
                    <p>Password : {formData.password}</p>

                </div>
            )}
        </div>
    )
}

export default MultiStepForm;
