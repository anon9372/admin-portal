import React, { useState, useReducer } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const navigate = useNavigate()
    // const [email, setEmail] = useState('')
    // const [name, setName] = useState('')
    // const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const ACTIONS = {
        EMAIL: 'email',
        NAME: 'name',
        PASSWORD: 'password'
    }

    // const initialState = {
    //     email: '',
    //     name: '',
    //     password: ''
    // }


    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.EMAIL:
                return { ...state, email: action.payload }

            case ACTIONS.PASSWORD:
                return { ...state, password: action.payload }

            case ACTIONS.NAME:
                return { ...state, name: action.payload }

            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        email: '',
        name: '',
        password: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password } = state
        if (email.length > 5 && (password === confirmPassword)) {
            let newObj = { email, name }
            localStorage.setItem('user', JSON.stringify(newObj))
            navigate('/')
        }
        else if (password !== confirmPassword) {
            toast.error('Password do not match')
        }
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
                                <input type='email' value={state.email} onChange={(e) => dispatch({ type: ACTIONS.EMAIL, payload: e.target.value })} placeholder='enter email' />
                            </div>
                            <div>
                                <input type='name' value={state.name} onChange={(e) => dispatch({ type: ACTIONS.NAME, payload: e.target.value })} placeholder='Username' />
                            </div>
                            <div>
                                <input type='password' value={state.password} onChange={(e) => dispatch({ type: ACTIONS.PASSWORD, payload: e.target.value })} placeholder='enter password' />
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
