'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { Roboto_Slab } from "next/font/google"

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["200", "500", "700"],
  variable: "--font-roboto_slab",
})

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  
  return (
    <nav>
    <div className="flex justify-between items-center w-full z-10">
    <Link href={process.env.navMainLink}>
      <div className="flex flex-row gap-0 items-center xl:scale-150 md:scale-125 scale-75">
          <Image 
            className="object-contain drop-shadow-sm"
            src={"/img/logo.png"}
            width={125}
            height={125}
            alt="Logo"
          />
          <h1 className={`font-bold text-6xl -mx-[6vh] text-white drop-shadow-xl ${roboto.variable} font-sans`}>{process.env.serverName}</h1>
      </div>
    </Link>
    <div className="md:hidden flex items-center">

      {/* Burger Menu Icon */}
      <button onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" className="text-white font-bold" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </button>
    </div>

    {/* Desktop Menu  */}
    <ul className="hidden md:flex items-center gap-6 text-white p-2 px-3 rounded-md bg-slate-300 bg-opacity-10 shadow-md ">
      <Link href={process.env.navNewsLink} className="rounded-md hover:outline-dotted hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
          <li>News</li>
      </Link>
      <Link href={process.env.navDownloadLink} className="rounded-md hover:outline-dotted hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
          <li>Download</li>
      </Link>
      <Link href={process.env.navVoteLink} className="rounded-md hover:outline-dotted hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
          <li>Vote</li>
      </Link>
      <Link href={process.env.navRegisterLink} className="rounded-md hover:outline-dotted hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
          <li className="font-bold">Register</li>
      </Link>
    </ul>
    </div>


    {/* Mobile Menu  */}
    {isOpen ?
      (
        <div className="md:hidden mb-2">
        <ul className="max-h-full max-w-12 gap-6 text-white p-2 px-3 rounded-md bg-slate-300 bg-opacity-10 shadow-md ">
        <Link href={process.env.navNewsLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
            <li>News</li>
        </Link>
        <Link href={process.env.navDownloadLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
            <li>Download</li>
        </Link>
        <Link href={process.env.navVoteLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
            <li>Vote</li>
        </Link>
        <Link href={process.env.navRegisterLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
            <li className="font-bold">Register</li>
        </Link>
        </ul>
      </div>
      ) : ""
    }
    </nav>      
  

  )
}