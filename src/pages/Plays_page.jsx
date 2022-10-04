import React from 'react'
import DefaultlayoutHoc from '../layout/Default_layout'

//componetns
import Poster from "../components/Poster/Poster_Component"
import PlayFilter from '../components/PlayFilter/PlayFIlter_Component'

const PlaysPage = () => {
  return <>
    <div className='container mx-auto px-4 my-10'>
      <div className='w-full flex  flex-col  flex-col-reverse lg:flex lg:flex-row-reverse gap-4'>
        <div className='lg:w-3/4 p-4 bg-white rounded'>
          <h2 className='text-2xl font-bold mb-4'>Plays in Chennai ECR</h2>
          <div className='flex flex-wrap'>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-space-cadet-by-varun-thakur-0-2022-9-15-t-5-16-43.jpg"
                title="Space Cadet by Varun Thakur"
                subtitle="Comedy Shows | English, Hindi | 16yrs + | 1hr" />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337276-edaqnacasb-portrait.jpg"
                title="Shreeja Chaturvedi Live Standup Show"
                subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 10min" />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-alexperience-0-2022-9-27-t-7-30-49.jpg"
                title="Alexperience"
                subtitle="Comedy Shows | English, Hindi | 16yrs + | 1hr" />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aansplaining-by-karthik-kumar-tour-2022-0-2022-7-20-t-11-7-49.jpg"
                title="AANSPLAINING by Karthik Kumar - TOUR 2022"
                subtitle="Comedy Shows | English, Hindi | 16yrs + | 1hr" />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prateek-kuhad-the-way-that-lovers-do-chennai-1-2022-10-3-t-14-44-50.jpg"
                title="Space Cadet by Varun Thakur"
                subtitle="Comedy Shows | English, Hindi | 16yrs + | 1hr" />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-space-cadet-by-varun-thakur-0-2022-9-15-t-5-16-43.jpg"
                title="Prateek Kuhad ``The Way that Lovers Do``
                Indie"
                subtitle=" Pop | Hindi, English | 12yrs + | 2hrs
                UNII50" />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-join-hands-for-jana-gana-mana-0-2022-7-29-t-12-24-11.jpg"
                title="Join hands for Jana Gana Mana"
                subtitle="Fusion, Indian Classical, Western classical | English, Hindi, Tamil, Telugu | 3hrs" />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-the-manganiyar-seduction-chennai-0-2022-9-17-t-0-39-42.jpg"
                title="The Manganiyar Seduction - Chennai"
                subtitle="The Manganiyar Seduction - Chennai" />
            </div>
          </div>
        </div>
        <div className='lg:w-1/4 p-4 bg-white rounded'>
          <h2 className='text-2xl font-bold mb-4'>
            Filters
          </h2>
          <div>
            <PlayFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
          </div>
          <div>
            <PlayFilter title="Language" tags={["English", "Hindi", "Tamil"]} />
          </div>
        </div>
      </div>
    </div>
  </>

}

export default DefaultlayoutHoc(PlaysPage)