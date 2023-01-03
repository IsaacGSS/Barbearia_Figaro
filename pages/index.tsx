import { Seo } from 'components/Seo/Seo'
import { Banner } from 'components/home/Banner'
import { Sobre } from '../components/home/Sobre'

export default function Home() {
  return (
    <>
      <Seo title='Barbearia Figaro' />

      <main className='h-screen'>
        <Banner />
        <Sobre />
      </main>
    </>
  )
}
