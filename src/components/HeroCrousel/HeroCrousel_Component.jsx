import React, { useState } from 'react'
import HeroSlider from 'react-slick'
import { NextArrow, PrevArrow, } from './ArrowsComponets'



const HeroCrousel = () => {
    const [images, setimages] = useState([
        {
            "adult": false,
            "backdrop_path": "/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg",
            "id": 718930,

        },
        {
            "adult": false,
            "backdrop_path": "/54Ptj4uTvoNToAdp23Z7sbDmQcv.jpg",
            "id": 642885,

        },
        {
            "adult": false,
            "backdrop_path": "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
            "id": 616037,

        },
        {
            "adult": false,
            "backdrop_path": "/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
            "id": 744276,

        },
        {
            "adult": false,
            "backdrop_path": "/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
            "id": 852046,

        },
        {
            "adult": false,
            "backdrop_path": "/geYUecpFI2AonDLhjyK9zoVFcMv.jpg",
            "id": 810693,

        },
        {
            "adult": false,
            "backdrop_path": "/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg",
            "id": 532639,

        },
        {
            "adult": false,
            "backdrop_path": "/2k9tBql5GYH328Krj66tDT9LtFZ.jpg",
            "id": 760741,

        },
        {
            "adult": false,
            "backdrop_path": "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
            "id": 985939,

        },
        {
            "adult": false,
            "backdrop_path": "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
            "id": 438148,

        },
        {
            "adult": false,
            "backdrop_path": "/7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg",
            "id": 916605,

        },
        {
            "adult": false,
            "backdrop_path": "/gX6VtQ7X6GRvcJQJhFZO9ZJ00q7.jpg",
            "id": 816952,

        },
        {
            "adult": false,
            "backdrop_path": "/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg",
            "id": 507086,

        },
        {
            "adult": false,
            "backdrop_path": "/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg",
            "id": 19995,

        },
        {
            "adult": false,
            "backdrop_path": "/mVNPfpydornVe4H4UCIk7WevWjf.jpg",
            "id": 882598,

        }
    ])


    const settingLG = {
        arrows: true,
        slidesToShow: 1,
        isfinite: true,
        speed: 500,
        autoplay: true,
        slideToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
    const settings = {
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        isfinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
        <>

            <div className='lg:hidden'>
                <HeroSlider {...settings}>
                    {images.map((images, index) => (
                        <div key={index} className='w-full h-56 md:h-80 py-3'>
                            <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner"
                                className='w-full h-full rounded-md object-cover object-center'
                            />
                        </div>
                    ))}


                </HeroSlider>
            </div>
            <div className='hidden lg:block'>
                <HeroSlider {...settingLG}>
                    {
                        images.map((images, index) => (
                            <div className='w-full h-96 px-2 py-3' key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner"
                                    className='w-full h-full rounded-md object-cover object-center'
                                />
                            </div>
                        ))
                    }

                </HeroSlider>
            </div>

        </>
    )
}

export default HeroCrousel