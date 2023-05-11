'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  
  return (
    <nav className="">
    <div className="flex justify-between items-center">
    <Link href={process.env.navMainLink}>
      <div className="flex flex-row gap-0 items-center">
          <Image 
            className="drop-shadow-xl"
            src={"/img/logo.png"}
            width={150}
            height={150}
            alt="Logo"
          />
          <h1 className="font-bold text-6xl -mx-[10vh] text-white drop-shadow-xl">{process.env.serverName}</h1>
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
      <Link href={process.env.navDiscordLink} className="rounded-md hover:outline-dotted hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
          <li>Discord</li>
      </Link>
      <Link href={process.env.navRegisterLink} className="rounded-md hover:outline-dotted hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
          <li className="font-bold">Register</li>
      </Link>
    </ul>
    </div>


    {/* Mobile Menu  */}
    {isOpen ?
      (
        <div className="md:hidden">
        <ul className="max-h-full max-w-12 gap-6 text-white p-2 px-3 rounded-md bg-slate-300 bg-opacity-10 shadow-md ">
        <Link href={process.env.navNewsLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
            <li>News</li>
        </Link>
        <Link href={process.env.navDownloadLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
            <li>Download</li>
        </Link>
        <Link href={process.env.navDiscordLink} className="block rounded-md hover:text-yellow-200 outline-orange-400 py-1.5 px-2.5 drop-shadow-xl">
            <li>Discord</li>
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