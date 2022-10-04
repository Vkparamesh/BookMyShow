import React, { useEffect, useState } from 'react'

//compoent
import EntertainmentCard from '../components/Entertainment/EntertainmentCard_component'
import HeroCrousel from '../components/HeroCrousel/HeroCrousel_Component'
import PostSlider from '../components/PostSlider/PostSlider_Component'

//ApI
import axios from "axios";

//hoc
import DefaultlayoutHoc from '../layout/Default_layout'


const HomePage = () => {
  const [recommendedMovies, setRecomendedMovies] = useState([])
  const [premierMovies, setPremierMovies] = useState([])
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([])


  useEffect(() => {
    const requestPopularMovies = async () => {
      const getTopPopularMovies = await axios.get(
        '/movie/popular')
      setRecomendedMovies(getTopPopularMovies.data.results)
    };


    requestPopularMovies();
  }, [])

  useEffect(() => {
    const requestUpcommingMovies = async () => {
      const getUpcommingMovies = await axios.get(
        '/movie/upcoming')
      setOnlineStreamEvents(getUpcommingMovies.data.results)
    };


    requestUpcommingMovies();
  }, [])
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        '/movie/top_rated')
      setPremierMovies(getTopRatedMovies.data.results)
    };


    requestTopRatedMovies();
  }, [])


  return (
    <>
      <HeroCrousel />
      <div className='container mx-auto px-4 md:px-12 my-8 '>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The Best of Entertainment</h1>
        <EntertainmentCard />
      </div>
      <div className='container mx-auto px-4 md:px12 my-8'>
        <PostSlider title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false} />
      </div>
      <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay"
              className='w-full h-full' />
          </div>
          <PostSlider title="Premier"
            subtitle="Brand New Releases Every Friday"
            posters={premierMovies}
            isDark={true} />
        </div>
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PostSlider title="Online Streaming Event"
          subtitle=""
          posters={onlineStreamEvents}
          isDark={false} />
      </div>
    </>
  )
}

export default DefaultlayoutHoc(HomePage)