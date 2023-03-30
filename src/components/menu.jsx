import React from 'react'
import { Link } from 'react-router-dom'

const menu = () => {
    return (
        <section id='menu'>

            <nav className='navbar navbar-vertical fixed-start navbar-expand-md navbar-light p-0'>
                <div className='d-flex flex-column' style={{ height: '100vh' }}>
                    <div className='p-3'>
                        <h1 className='text-primary'>Achivers IT</h1>
                    </div>
                    <div>
                        <ul className='navbar-nav d-flex flex-column gap-3 justify-content-center px-4' style={{ listStyle: 'none' }}>
                            <li className='nav-item' >
                                <Link to='/' className='list-style text-secondary'>
                                    Dashboard
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/users' className='list-style text-secondary'>
                                    Users
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/products' className='list-style text-secondary'>
                                    Products
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/login' className='list-style text-danger'>
                                    Signout
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        </section>
    )
}

export default menu
