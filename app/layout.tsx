import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CosmicMS',
  description: 'CosmicMS | 5x EXP, 2x Drop, 2x Meso | Join Us Today!',
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="mx-[2rem]">
         <div className='p-2 m-4 max-w-full max-h-full xl:max-h-[42rem] h-screen bg-bg_image bg-scroll rounded-md'>
           <Nav />
           {children}
         </div>
      </div>
    </>
  );
}
