import React, { useContext } from 'react'
import PaymentModel from '../PaymentModel/PaymentModel_component';
import { MovieContext } from '../../context/MovieContext';

const MovieInfo = ({ movie }) => {

    const { price, setIsOpen, isOpen, rentMovie, BuyMovie } = useContext(MovieContext)
    const genres = movie.genres?.map(({ name }) => name).join(",");


    return <>
        <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="flex flex-col gap-3 px-4 my-3">
            <h1 className='text-white text-5xl font-bold'>{movie.original_title}</h1>
            <div className="  flex flex-col gap-2 text-white">
                <h4>4K rating</h4>
                <h4>English , Hindi, Kannada, Tamil, Telgu</h4>
                <h4>{movie.runtime} min | {genres}
                </h4>
            </div>
            <div className="flex items-center gap-3 w-full">
                <button onClick={rentMovie} className='bg-red-500 text-white w-full  py-3 font-semibold  rounded-lg'>
                    Rent ₹179
                </button>
                <button onClick={BuyMovie} className='bg-red-600 text-white w-full  py-3 font-semibold  rounded-lg'>
                    Buy ₹699
                </button>
            </div>
        </div>

    </>
}

export default MovieInfo