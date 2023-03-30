import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        if (email.length > 0 && password.length > 5) {
            let creds = { email, password }
            localStorage.setItem('user', JSON.stringify(creds))
            navigate('/')
        }
        else {
            toast.error('Invalid Creds')
        }

    }

    return (
        <section id='login-page' className='bg-warning d-flex  justify-content-center align-content-center g-5' style={{ height: '100vh' }}>
            <div className='row align-items-center justify-content-center gap-5'>
                <div className='col-auto'>
                    <form onSubmit={handleSubmit}>
                        <ToastContainer />
                        <h2>Login</h2>
                        <div className='d-flex flex-column gap-4'>
                            <div>
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email' />
                            </div>
                            <div>
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter password' />
                            </div>
                            <div>
                                <button type='submit' className='btn btn-danger'>Login</button>
                            </div>
                        </div>
                        <div>
                            Dont have account? <Link to='/register'>Register</Link>
                        </div>
                    </form>
                </div>
                <div className='col-auto'>
                    <img src='/assets/images/login.png' alt='login-image' />
                </div>
            </div>
        </section>
    )
}

export default Login
