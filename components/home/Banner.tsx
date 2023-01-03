import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
// import Link from 'next/link'

export const Banner = () => {
  return (
    <div id='home' className='w-full flex flex-col items-center justify-center'>
      <video
        muted
        autoPlay
        loop
        src='https://1894e86a-153e-444e-932f-0a3327f905c9.id.repl.co/video.mp4'
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
