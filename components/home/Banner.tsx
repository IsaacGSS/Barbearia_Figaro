import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
// import Link from 'next/link'

export const Banner = () => {
  return (
    <div id='home' className='w-full flex flex-col items-center justify-center'>
      <video
        muted
        autoPlay
        loop
        src='https://vod-progressive.akamaized.net/exp=1672623536~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F55%2F16%2F400276677%2F1708047268.mp4~hmac=c9116c5c4db7d0ae63e55d1280e6efdc56685f88c97dde24b46c5d57bf160e9a/vimeo-prod-skyfire-std-us/01/55/16/400276677/1708047268.mp4'
        className='w-full h-screen object-cover brightness-50 saturate-50 '
      />
      <div className='absolute flex flex-col justify-center items-center gap-3 text-center font-bold  text-5xl'>
        <h2>Barba</h2>
        <h2>Cabelo</h2>
        <h2>& Bigode</h2>
      </div>

      <a href='#sobre' className='transition-all'>
        <ArrowDownCircleIcon className='absolute w-10 h-10 -ml-5 bottom-0 animate-wiggle ease-in-out' />
      </a>
    </div>
  )
}
