import React, { useEffect, useState, useContext } from 'react'
import MovieslayoutHoc from '../layout/Movies_layout'
import { useParams } from "react-router-dom";
import axios from "axios"
import { MovieContext } from '../context/MovieContext';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa"
import PostSlider from '../components/PostSlider/PostSlider_Component';
import MovieHero from '../components/MovieHero/MovieHero_Component';
import Cast from '../components/cast/castComponet';

const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext)
  const [cast, setCast] = useState([]);
  const [SimilarMovies, setSimilarMovies] = useState([]);
  const [RecommendedMovies, setRecommendedMovies] = useState([]);


  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast)
    }
    requestCast();
  }, [id])

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommendedMovies(getRecommendedMovies.data.results)
    }
    requestRecommendedMovies();
  }, [id])
  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/credits`);
      setSimilarMovies(getSimilarMovies.data.results)
    }
    requestSimilarMovies();
  }, [id])

  useEffect(() => {
    const requestMovies = async () => {
      const getMovies = await axios.get(`/movie/${id}`);
      setMovie(getMovies.data)
    }
    requestMovies()
  }, [id])

  const settingsCast = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        },
      },
    ]
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        },
      },
    ]

  };
  return (<>
    <MovieHero />
    <div className=' my-12 container px-4 lg-ml-20 lg:w-2/3'>
      <div className='flex flex-col items-starat gap-3'>
        <h1 className='text-gray-800 font-bold text-2xl' > About the movie</h1>
        <p>{movie.overview}</p>
      </div>
      <div className='my-8'>
        <hr />
      </div>
      <div className='my8'>
        <h2 className='text-gray-800 font-bold text-2xl'>Applicable Offers</h2>
        <div className='flex flex-col gap-3 lg:flex-row '>
          <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-8 h-8'>
              <FaCcApplePay className='w-full h-full' />
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 font-bold text-xl'>Film pass</h3>
              <p className='text-gray-700'>50% off up to INR 150 on all Rupay card* on BookMyShow Stream</p>
            </div>
          </div>
          <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-8 h-8'>
              <FaCcVisa className='w-full h-full' />
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 font-bold text-xl'>Visa Stream Offers</h3>
              <p className='text-gray-700'>50% off up to INR 150 on all Rupay card* on BookMyShow Stream</p>
            </div>
          </div>
        </div>
      </div>
      {/* crew and cast */}
      <div className='my-8'>
        <hr />
      </div>
      <div className='my-8'>
        <h2 className='text-gray-800 font-bold text-2xl mb-4'>
          Cast and Crew
        </h2>
        <Slider {...settingsCast}>
          {cast.map((castData) => (
            <Cast image={castData.profile_path} castName={castData.original_name} role={castData.character} />
          ))}
        </Slider>
      </div>

      <div className='my-8'>
        <PostSlider config={settings}
          title="Recommended Movies"
          posters={RecommendedMovies}
          isDark={false} />
      </div>
      {/* RecommendedMovies */}
      <div className='my-8'>
        <hr />
      </div>
      {/* RecommendedMovies */}
      <div className='my-8'>
        <PostSlider config={settings}
          title="BMS EXclusice"
          posters={RecommendedMovies}
          isDark={false} />
      </div>
    </div>

  </>
  )
}

export default MovieslayoutHoc(MoviePage)