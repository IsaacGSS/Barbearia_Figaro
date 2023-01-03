import { Inav } from 'types/interface'
import Link from 'next/link'

export const Nav = ({ children, route }: Inav) => {
  return (
    <li
      className='
    flex items-center  transition-all text-base ease-linear
    hover:font-bold hover:-mx-1 hover:text-lg hover:text-amber-100 hover:opacity-95
    md:mx-1'
    >
      <Link href={route}>
        <div className='md:px-2'>
          <p>{children}</p>
        </div>
      </Link>
    </li>
  )
}
