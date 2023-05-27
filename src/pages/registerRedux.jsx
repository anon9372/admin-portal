import React, { useState, useReducer } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const entity = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState(entity.email)
    const [name, setName] = useState(entity.name)
    const [password, setPassword] = useState(entity.password)
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('values', email, password, name)
        dispatch({ type: "EMAIL", payload: email })
        dispatch({ type: "NAME", payload: name })
        dispatch({ type: "PASSWORD", payload: password })
        dispatch({ type: "TOGGLE" })
    }

    return (
        <section id='register-page'>
            <div className='d-flex bg-warning align-items-center justify-content-center' style={{ height: '100vh' }}>
                <div className='col-6 d-flex justify-content-center'>
                    <form onSubmit={handleSubmit}>
                        <ToastContainer />
                        <h2>Register</h2>
                        <div className='d-flex flex-column gap-4'>
                            <div>
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email' />
                            </div>
                            <div>
                                <input type='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Username' />
                            </div>
                            <div>
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter password' />
                            </div>
                            <div>
                                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' />
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
                <div className='col-6 d-flex justify-content-center'>
                    <img src='/assets/images/login.png' alt='login-image' />
                </div>
            </div>

        </section>
    )
}

export default Register
