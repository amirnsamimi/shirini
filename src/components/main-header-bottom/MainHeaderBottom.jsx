import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



export default function MainHeaderBottom() {
  return (
    <div className='flex mainHeaderBottom'>

        <div className=' flex-col pt-4 justify-start  pl-2.5 border-b border-current border-solid w-full'>
          <div className='border rounded-full border-red-90  w-3 h-3 bg-red-500'></div>
          <p>Your passion, Our Quality</p>
        </div>

        <div className='middle mx-auto justify-center items-end flex  w-[20rem] h-[5rem]  ' style={{borderRadius:"10rem 10rem 0 0", border: "1px solid rgba(121, 121, 121, 1)", borderBottom:"none"}}>
            <ArrowDownwardIcon fontSize='large' xs={{color:"rgba(121, 121, 121, 1)"}}/>
        </div>

        <div className='flex-col right text-right  border-b w-full border-current border-solid '>
          <InstagramIcon fontSize='large' />
          <YouTubeIcon fontSize='large' />
          <p>Our Social Network</p>
        </div>

    </div>
  )
}