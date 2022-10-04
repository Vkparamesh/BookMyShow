import React from 'react'
import Navbar from '../components/Navbar/Navbar_Component'

const DefaultlayoutHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <h1>footer</h1>
        </div>
    )
}

export default DefaultlayoutHoc