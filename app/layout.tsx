import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'CosmicMS',
  description: 'CosmicMS | 5x EXP, 2x Drop, 2x Meso | Join Us Today!',
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className='h-screen w-screen scale-[95%] drop-shadow-md'> 
      <div className="rounded-xl bg-bg_image backgroundImage bg-clone bg-cover h-screen w-screen p-5">
            <Toaster/>
            <Nav />
            {children}
            <Footer />
      </div>
    </main>
  );
}
