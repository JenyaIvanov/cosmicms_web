import './globals.css'
import Nav from './components/Nav'

export const metadata = {
  title: 'CosmicMS',
  description: 'CosmicMS | 5x EXP, 2x Drop, 2x Meso | Join Us Today!',
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className='h-screen w-screen scale-[95%]'>
      <div className=" rounded-md bg-bg_image backgroundImage bg-clone bg-cover h-screen w-screen p-5">
            <Nav />
            {children}
      </div>
    </main>
  );
}
