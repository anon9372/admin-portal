import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/menu'
const AdminLayout = () => {
    return (
        <div className='d-flex'>
            <Menu />
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default AdminLayout
