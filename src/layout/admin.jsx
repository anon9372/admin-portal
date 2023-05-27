import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/menu'
// import _ from 'lodash'
import { isEmpty } from 'lodash'

const AdminLayout = () => {
    const user = localStorage.getItem('user')
    return (
        <div className='d-flex'>
            {!isEmpty(user) &&
                <div>
                    <Menu />
                    <div>
                        <Outlet />
                    </div>
                </div>}
        </div>
    )
}

export default AdminLayout
