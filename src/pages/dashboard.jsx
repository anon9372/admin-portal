import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Dasboard = () => {

    const entity = useSelector(state => state)

    return (
        <div>
            Hello, {entity.name}
        </div>
    )
}

export default Dasboard
