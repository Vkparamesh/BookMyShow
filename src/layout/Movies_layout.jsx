import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar_Component'


const MovieslayoutHoc = (Component) => ({ ...props }) => {


    return (
        <div>
            <MovieNavbar />
            <Component {...props} />
        </div>
    )
}

export default MovieslayoutHoc