import { Nav } from './Nav'
import { User } from './User'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export const Header = () => {
  const [isActive, setIsActive] = useState(true)
  const onclick = () => setIsActive(!isActive)

  return (
    <header
      aria-checked={isActive}
      className='
      max-md:aria-checked:-left-44 max-md:aria-checked:bg-transparent 
      fixed h-screen left-0 transition-all overflow-hidden p-2 flex flex-col bg-zinc-900 text-white opacity-90 z-50 
      md:h-auto md:w-full md:px-3 md:flex-row md:items-center md:justify-between md:text-center'
    >
      <div className='px-2 flex gap-5 justify-between items-center'>
        <h1 className='text-xl font-bold'>Barbearia Figaro</h1>

        <div
          onClick={onclick}
          className='w-6 h-6 z-10 cursor-pointer md:hidden'
        >
          {isActive ? (
            <Bars3Icon className='h-7 w-7 text-black bg-white rounded-md' />
          ) : (
            <XMarkIcon className='h-7 w-7' />
          )}
        </div>
      </div>

      <div>
        <ul
          className='
          relative pt-5 ml-4 gap-2 flex flex-col 
          md:flex-row md:pt-0 md:-ml-[17%] md:gap-0'
        >
          <Nav route='/#home'>Home</Nav>
          <Nav route='/#sobre'>Sobre</Nav>
          <Nav route='/app/galeria'>Galeria</Nav>
          <Nav route='/app/agendamento'>Agendamento</Nav>
          <Nav route='/app/contato'>Contato</Nav>
        </ul>
      </div>

      <div>
        <User />
      </div>
    </header>
  )
}
